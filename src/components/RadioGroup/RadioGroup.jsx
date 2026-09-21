import './RadioGroup.css';

export function RadioGroup({ name, value, onChange, options, columns = 1 }) {
  return (
    <div className={`choice-list cols-${columns}`} role="radiogroup">
      {options.map((option) => {
        const id = `${name}-${option.value}`;
        return (
          <label key={option.value} className={`choice-item ${value === option.value ? 'is-selected' : ''}`} htmlFor={id}>
            <input
              id={id}
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
            />
            <span className="choice-item__mark" aria-hidden="true" />
            <span>{option.label}</span>
          </label>
        );
      })}
    </div>
  );
}
