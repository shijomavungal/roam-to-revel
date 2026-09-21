import '../RadioGroup/RadioGroup.css';
import './CheckboxGroup.css';

export function CheckboxGroup({ name, values, onToggle, options, columns = 2 }) {
  return (
    <div className={`check-list cols-${columns}`}>
      {options.map((option) => {
        const id = `${name}-${option.value}`;
        const checked = values.includes(option.value);
        return (
          <label
            key={option.value}
            className={`choice-item is-checked ${checked ? 'is-selected' : ''}`}
            htmlFor={id}
          >
            <input
              id={id}
              type="checkbox"
              name={name}
              value={option.value}
              checked={checked}
              onChange={() => onToggle(option.value)}
            />
            <span className="choice-item__mark" aria-hidden="true" />
            <span>{option.label}</span>
          </label>
        );
      })}
    </div>
  );
}
