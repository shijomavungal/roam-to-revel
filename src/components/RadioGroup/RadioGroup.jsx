import { ColorIcon } from '../ColorIcon/ColorIcon';
import './RadioGroup.css';

export function RadioGroup({ name, value, onChange, options, columns = 'auto' }) {
  return (
    <div className={`choice-list cols-${columns}`} role="radiogroup">
      {options.map((option) => {
        const id = `${name}-${option.value}`;
        const selected = value === option.value;
        return (
          <label
            key={option.value}
            className={`choice-item ${option.icon ? 'has-icon' : ''} ${selected ? 'is-selected' : ''}`}
            htmlFor={id}
          >
            <input
              id={id}
              type="radio"
              name={name}
              value={option.value}
              checked={selected}
              onChange={() => onChange(option.value)}
            />
            <span className="choice-item__mark" aria-hidden="true" />
            {option.icon ? (
              <span className="choice-item__icon color-icon-tile">
                <ColorIcon name={option.icon} size={22} />
              </span>
            ) : null}
            <span>{option.label}</span>
          </label>
        );
      })}
    </div>
  );
}
