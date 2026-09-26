import { useEffect, useId, useRef, useState } from 'react';
import { formatAirport, searchAirports } from '../../data/airports';
import './AirportInput.css';

export function AirportInput({ id, name, value, onChange }) {
  const listId = useId();
  const rootRef = useRef(null);
  const [query, setQuery] = useState(value);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const matches = searchAirports(query);

  useEffect(() => {
    if (value) setQuery(value);
  }, [value]);

  useEffect(() => {
    function handlePointerDown(event) {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    }

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, []);

  const selectAirport = (airport) => {
    const label = formatAirport(airport);
    setQuery(label);
    setOpen(false);
    onChange(label);
  };

  const handleQueryChange = (event) => {
    const next = event.target.value;
    setQuery(next);
    setOpen(true);
    setActiveIndex(0);
    onChange('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((current) => Math.min(current + 1, Math.max(matches.length - 1, 0)));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((current) => Math.max(current - 1, 0));
    } else if (event.key === 'Enter' && open && matches[activeIndex]) {
      event.preventDefault();
      selectAirport(matches[activeIndex]);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  const showList = open && query.trim().length >= 2;

  return (
    <div className="airport-input" ref={rootRef}>
      <input
        id={id}
        name={name}
        className="control"
        type="text"
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={showList}
        aria-controls={listId}
        aria-activedescendant={showList && matches[activeIndex] ? `${listId}-${activeIndex}` : undefined}
        autoComplete="off"
        placeholder="Type a city, airport, or code"
        value={query}
        onChange={handleQueryChange}
        onFocus={() => setOpen(true)}
        onKeyDown={handleKeyDown}
      />
      {showList ? (
        <ul className="airport-input__list" id={listId} role="listbox">
          {matches.length ? (
            matches.map((airport, index) => (
              <li key={airport.code} role="presentation">
                <button
                  id={`${listId}-${index}`}
                  type="button"
                  role="option"
                  aria-selected={index === activeIndex}
                  className={`airport-input__option ${index === activeIndex ? 'is-active' : ''}`}
                  onMouseDown={(event) => event.preventDefault()}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => selectAirport(airport)}
                >
                  <span className="airport-input__city">
                    {airport.city} ({airport.code})
                  </span>
                  <span className="airport-input__meta">
                    {airport.name} · {airport.country}
                  </span>
                </button>
              </li>
            ))
          ) : (
            <li className="airport-input__empty">No matching airports</li>
          )}
        </ul>
      ) : null}
    </div>
  );
}
