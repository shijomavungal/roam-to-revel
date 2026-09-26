import { ColorIcon } from '../ColorIcon/ColorIcon';
import { Icon } from '../Icon/Icon';
import './ChoiceCards.css';

export function ChoiceCards({
  name,
  options,
  value,
  values,
  multiple = false,
  onChange,
  onToggle,
}) {
  return (
    <div className="choice-cards">
      {options.map((option) => {
        const selected = multiple ? values.includes(option.value) : value === option.value;
        const id = `${name}-${option.value}`;
        return (
          <label key={option.value} className={`choice-card ${selected ? 'is-selected' : ''}`} htmlFor={id}>
            <input
              id={id}
              type={multiple ? 'checkbox' : 'radio'}
              name={name}
              value={option.value}
              checked={selected}
              onChange={() => (multiple ? onToggle(option.value) : onChange(option.value))}
            />
            <span className="choice-card__tick" aria-hidden="true">
              <Icon name="check" size={14} />
            </span>
            {option.icon ? (
              <span className="choice-card__icon color-icon-tile">
                <ColorIcon name={option.icon} size={46} />
              </span>
            ) : null}
            <span className="choice-card__label">{option.label}</span>
            {option.hint ? <span className="choice-card__hint">{option.hint}</span> : null}
          </label>
        );
      })}
    </div>
  );
}
