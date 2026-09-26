import { useEffect, useId, useRef, useState } from 'react';
import { ColorIcon } from '../ColorIcon/ColorIcon';
import {
  WEEKDAYS,
  addDays,
  ageLabel,
  formatDisplay,
  monthCells,
  parseISO,
  todayISO,
} from '../../utils/calendar';
import './DateInput.css';

const MONTHS = Array.from({ length: 12 }, (_, month) =>
  new Date(2000, month, 1).toLocaleDateString('en-GB', { month: 'short' }),
);

const ARROW_STEPS = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 };

function Chevron({ direction }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d={direction === 'left' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function clampISO(iso, min, max) {
  if (min && iso < min) return min;
  if (max && iso > max) return max;
  return iso;
}

function monthKey(year, month) {
  return year * 12 + month;
}

export function DateInput({
  id,
  name,
  value,
  onChange,
  min,
  max,
  placeholder = 'Select a date',
  title = 'Date of birth',
  icon = 'cake',
  showAge = true,
}) {
  const popoverId = useId();
  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const popoverRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [cursor, setCursor] = useState(() => {
    const anchor = parseISO(value || max || todayISO());
    return { year: anchor.getFullYear(), month: anchor.getMonth() };
  });
  const [focusIso, setFocusIso] = useState('');

  const minDate = min ? parseISO(min) : null;
  const maxDate = max ? parseISO(max) : null;
  const minKey = minDate ? monthKey(minDate.getFullYear(), minDate.getMonth()) : -Infinity;
  const maxKey = maxDate ? monthKey(maxDate.getFullYear(), maxDate.getMonth()) : Infinity;
  const cursorKey = monthKey(cursor.year, cursor.month);

  const firstYear = minDate ? minDate.getFullYear() : cursor.year - 20;
  const lastYear = maxDate ? maxDate.getFullYear() : cursor.year + 20;
  const years = [];
  for (let year = lastYear; year >= firstYear; year -= 1) years.push(year);

  const goToMonth = (year, month) => {
    const key = Math.min(Math.max(monthKey(year, month), minKey), maxKey);
    setCursor({ year: Math.floor(key / 12), month: key % 12 });
  };

  const closePicker = (returnFocus) => {
    setOpen(false);
    if (returnFocus) triggerRef.current?.focus();
  };

  const openPicker = () => {
    const start = clampISO(value || max || todayISO(), min, max);
    const anchor = parseISO(start);
    setCursor({ year: anchor.getFullYear(), month: anchor.getMonth() });
    setFocusIso(start);
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return undefined;

    const handlePointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    const handleKeyDown = (event) => {
      if (event.key !== 'Escape') return;
      setOpen(false);
      triggerRef.current?.focus();
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    popoverRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open || !focusIso) return;
    popoverRef.current?.querySelector(`[data-iso="${focusIso}"]`)?.focus({ preventScroll: true });
  }, [open, focusIso]);

  const selectDate = (iso) => {
    if ((min && iso < min) || (max && iso > max)) return;
    onChange(iso);
    closePicker(true);
  };

  const handleGridKeyDown = (event) => {
    const step = ARROW_STEPS[event.key];
    if (!step || !focusIso) return;
    event.preventDefault();
    const next = clampISO(addDays(focusIso, step), min, max);
    const nextDate = parseISO(next);
    setFocusIso(next);
    setCursor({ year: nextDate.getFullYear(), month: nextDate.getMonth() });
  };

  const today = todayISO();
  const cells = monthCells(cursor.year, cursor.month);
  const tabStop = cells.some((cell) => !cell.outside && cell.iso === focusIso)
    ? focusIso
    : cells.find((cell) => !cell.outside && (!min || cell.iso >= min) && (!max || cell.iso <= max))?.iso;
  const age = showAge ? ageLabel(value) : '';

  return (
    <div className={`date-picker ${open ? 'is-open' : ''}`} ref={rootRef}>
      <input type="hidden" name={name} value={value} />
      <button
        id={id}
        ref={triggerRef}
        type="button"
        className={`control date-picker__trigger ${value ? 'has-value' : ''}`}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={open ? popoverId : undefined}
        onClick={() => (open ? closePicker(false) : openPicker())}
      >
        <span className="date-picker__icon color-icon-tile">
          <ColorIcon name={icon} size={24} />
        </span>
        <span className="date-picker__text">
          <span className="date-picker__value">{value ? formatDisplay(value) : placeholder}</span>
          {age ? <span className="date-picker__age">{age}</span> : null}
        </span>
        <span className="date-picker__caret" aria-hidden="true">
          <Chevron direction="right" />
        </span>
      </button>

      {open ? (
        <div
          className="date-picker__popover"
          id={popoverId}
          ref={popoverRef}
          role="dialog"
          aria-label={`Choose ${title.toLowerCase()}`}
        >
          <div className="date-picker__head">
            <span className="date-picker__head-icon">
              <ColorIcon name={icon} size={30} />
            </span>
            <div>
              <small>{title}</small>
              <strong>{value ? formatDisplay(value) : 'Pick a day'}</strong>
            </div>
            {age ? <span className="date-picker__head-age">{age}</span> : null}
          </div>

          <div className="date-picker__toolbar">
            <button
              type="button"
              className="date-picker__nav"
              aria-label="Previous month"
              disabled={cursorKey <= minKey}
              onClick={() => goToMonth(cursor.year, cursor.month - 1)}
            >
              <Chevron direction="left" />
            </button>
            <div className="date-picker__selects">
              <select
                aria-label="Month"
                value={cursor.month}
                onChange={(event) => goToMonth(cursor.year, Number(event.target.value))}
              >
                {MONTHS.map((label, month) => {
                  const key = monthKey(cursor.year, month);
                  return (
                    <option key={label} value={month} disabled={key < minKey || key > maxKey}>
                      {label}
                    </option>
                  );
                })}
              </select>
              <select
                aria-label="Year"
                value={cursor.year}
                onChange={(event) => goToMonth(Number(event.target.value), cursor.month)}
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="button"
              className="date-picker__nav"
              aria-label="Next month"
              disabled={cursorKey >= maxKey}
              onClick={() => goToMonth(cursor.year, cursor.month + 1)}
            >
              <Chevron direction="right" />
            </button>
          </div>

          <div className="date-picker__weekdays" aria-hidden="true">
            {WEEKDAYS.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
          <div className="date-picker__grid" onKeyDown={handleGridKeyDown}>
            {cells.map((cell) => {
              const disabled = cell.outside || (min && cell.iso < min) || (max && cell.iso > max);
              const selected = cell.iso === value;
              const className = [
                'date-picker__day',
                cell.outside ? 'is-outside' : '',
                selected ? 'is-selected' : '',
                cell.iso === today ? 'is-today' : '',
              ]
                .filter(Boolean)
                .join(' ');

              return (
                <button
                  key={cell.iso}
                  type="button"
                  data-iso={cell.iso}
                  className={className}
                  disabled={Boolean(disabled)}
                  tabIndex={cell.iso === tabStop ? 0 : -1}
                  aria-pressed={selected}
                  aria-label={formatDisplay(cell.iso)}
                  onFocus={() => setFocusIso(cell.iso)}
                  onClick={() => selectDate(cell.iso)}
                >
                  {Number(cell.iso.slice(-2))}
                </button>
              );
            })}
          </div>

          <div className="date-picker__footer">
            <button
              type="button"
              className="date-picker__link"
              disabled={!value}
              onClick={() => {
                onChange('');
                closePicker(true);
              }}
            >
              Clear
            </button>
            <button type="button" className="date-picker__link" onClick={() => closePicker(true)}>
              Done
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
