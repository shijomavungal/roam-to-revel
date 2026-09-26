import { useEffect, useId, useRef, useState } from 'react';
import { FormField } from '../FormField/FormField';
import {
  WEEKDAYS,
  formatDisplay,
  monthCells,
  monthLabel,
  parseISO,
  shiftMonth,
  todayISO,
} from '../../utils/calendar';
import './TripDateRange.css';

export function TripDateRange({
  departureDate,
  returnDate,
  returnError,
  onDepartureChange,
  onReturnChange,
}) {
  const popoverId = useId();
  const rootRef = useRef(null);
  const minDate = todayISO();
  const initial = departureDate ? parseISO(departureDate) : new Date();
  const [open, setOpen] = useState(false);
  const [picking, setPicking] = useState('departure');
  const [cursor, setCursor] = useState({ year: initial.getFullYear(), month: initial.getMonth() });
  const [hoverDate, setHoverDate] = useState('');

  useEffect(() => {
    if (!open) return undefined;

    const handlePointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const openPicker = (step) => {
    const anchor = step === 'return' && departureDate ? departureDate : departureDate || minDate;
    const anchorDate = parseISO(anchor);
    setCursor({ year: anchorDate.getFullYear(), month: anchorDate.getMonth() });
    setPicking(step === 'return' && departureDate ? 'return' : 'departure');
    setHoverDate('');
    setOpen(true);
  };

  const selectDate = (iso) => {
    if (iso < minDate) return;

    if (picking === 'departure' || !departureDate) {
      onDepartureChange(iso);
      if (returnDate && iso > returnDate) onReturnChange('');
      setPicking('return');
      setHoverDate('');
      return;
    }

    if (iso < departureDate) {
      onDepartureChange(iso);
      onReturnChange('');
      setPicking('return');
      setHoverDate('');
      return;
    }

    onReturnChange(iso);
    setOpen(false);
  };

  const clearDates = () => {
    onDepartureChange('');
    onReturnChange('');
    setPicking('departure');
    setHoverDate('');
  };

  const rangeEnd = picking === 'return' && hoverDate && hoverDate >= departureDate ? hoverDate : returnDate;
  const leftMonth = cursor;
  const rightMonth = shiftMonth(cursor.year, cursor.month, 1);
  const atMinMonth = cursor.year === parseISO(minDate).getFullYear() && cursor.month === parseISO(minDate).getMonth();

  const renderMonth = (year, month) => (
    <div className="trip-calendar__month">
      <p className="trip-calendar__title">{monthLabel(year, month)}</p>
      <div className="trip-calendar__weekdays">
        {WEEKDAYS.map((day) => (
          <span key={`${year}-${month}-${day}`}>{day}</span>
        ))}
      </div>
      <div className="trip-calendar__grid">
        {monthCells(year, month).map((cell) => {
          const disabled = cell.iso < minDate;
          const isStart = cell.iso === departureDate;
          const isEnd = Boolean(rangeEnd) && cell.iso === rangeEnd;
          const inRange = Boolean(departureDate && rangeEnd && cell.iso > departureDate && cell.iso < rangeEnd);
          const className = [
            'trip-calendar__day',
            cell.outside ? 'is-outside' : '',
            disabled ? 'is-disabled' : '',
            inRange ? 'is-in-range' : '',
            isStart ? 'is-start' : '',
            isEnd ? 'is-end' : '',
            cell.iso === minDate ? 'is-today' : '',
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <button
              key={cell.iso}
              type="button"
              className={className}
              disabled={disabled}
              aria-pressed={isStart || isEnd}
              aria-label={formatDisplay(cell.iso)}
              onMouseEnter={() => setHoverDate(cell.iso)}
              onFocus={() => setHoverDate(cell.iso)}
              onClick={() => selectDate(cell.iso)}
            >
              <span>{Number(cell.iso.slice(-2))}</span>
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="trip-dates" ref={rootRef}>
      <div className="field-grid two">
        <FormField id="departureDate" label="Departure date">
          <button
            id="departureDate"
            type="button"
            className={`control trip-dates__trigger ${open && picking === 'departure' ? 'is-active' : ''}`}
            aria-expanded={open}
            aria-controls={popoverId}
            onClick={() => openPicker('departure')}
          >
            <span>{departureDate ? formatDisplay(departureDate) : 'Select date'}</span>
          </button>
        </FormField>
        <FormField id="returnDate" errorPath="trip.returnDate" label="Return date" error={returnError}>
          <button
            id="returnDate"
            type="button"
            className={`control trip-dates__trigger ${open && picking === 'return' ? 'is-active' : ''}`}
            aria-expanded={open}
            aria-controls={popoverId}
            onClick={() => openPicker('return')}
          >
            <span>{returnDate ? formatDisplay(returnDate) : 'Select date'}</span>
          </button>
        </FormField>
      </div>

      {open ? (
        <div className="trip-dates__popover" id={popoverId} role="dialog" aria-label="Choose travel dates">
          <div className="trip-dates__steps">
            <button
              type="button"
              className={picking === 'departure' ? 'is-current' : ''}
              onClick={() => setPicking('departure')}
            >
              <small>Departure</small>
              <strong>{departureDate ? formatDisplay(departureDate) : 'Select date'}</strong>
            </button>
            <button
              type="button"
              className={picking === 'return' ? 'is-current' : ''}
              onClick={() => departureDate && setPicking('return')}
              disabled={!departureDate}
            >
              <small>Return</small>
              <strong>{returnDate ? formatDisplay(returnDate) : 'Select date'}</strong>
            </button>
          </div>
          <p className="trip-dates__prompt">
            {picking === 'return' ? 'Now choose your return date.' : 'Choose your departure date.'}
          </p>
          <div className="trip-calendar__toolbar">
            <button
              type="button"
              className="trip-calendar__nav"
              aria-label="Previous month"
              onClick={() => setCursor((current) => shiftMonth(current.year, current.month, -1))}
              disabled={atMinMonth}
            >
              ‹
            </button>
            <button
              type="button"
              className="trip-calendar__nav"
              aria-label="Next month"
              onClick={() => setCursor((current) => shiftMonth(current.year, current.month, 1))}
            >
              ›
            </button>
          </div>
          <div className="trip-calendar__months">
            {renderMonth(leftMonth.year, leftMonth.month)}
            {renderMonth(rightMonth.year, rightMonth.month)}
          </div>
          <div className="trip-dates__footer">
            <button type="button" className="trip-dates__clear" onClick={clearDates} disabled={!departureDate && !returnDate}>
              Clear dates
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
