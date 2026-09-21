import './NumberStepper.css';

export function NumberStepper({ id, label, hint, value, min = 0, max = 20, onChange }) {
  const decrease = () => onChange(Math.max(min, Number(value) - 1));
  const increase = () => onChange(Math.min(max, Number(value) + 1));

  return (
    <div className="stepper">
      <div>
        <p className="stepper__label">{label}</p>
        {hint ? <p className="stepper__hint">{hint}</p> : null}
      </div>
      <div className="stepper__controls">
        <button type="button" onClick={decrease} aria-label={`Decrease ${label}`} disabled={value <= min}>
          −
        </button>
        <input
          id={id}
          type="number"
          min={min}
          max={max}
          value={value}
          onChange={(event) => {
            const next = Number(event.target.value);
            if (Number.isNaN(next)) return;
            onChange(Math.min(max, Math.max(min, next)));
          }}
        />
        <button type="button" onClick={increase} aria-label={`Increase ${label}`} disabled={value >= max}>
          +
        </button>
      </div>
    </div>
  );
}
