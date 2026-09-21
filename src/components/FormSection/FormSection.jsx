import { TravelScene } from '../TravelScene/TravelScene';
import { Icon } from '../Icon/Icon';
import './FormSection.css';

export function FormSection({
  id,
  number,
  title,
  kicker,
  description,
  scene,
  icon,
  hasError,
  direction = 'forward',
  children,
}) {
  return (
    <section
      id={id}
      className={`form-section is-entering is-${direction} ${hasError ? 'is-invalid' : ''}`}
    >
      <TravelScene scene={scene} />
      <header className="form-section__header">
        <span className="form-section__number" aria-hidden="true">
          {icon ? <Icon name={icon} size={20} /> : number}
        </span>
        <div>
          {kicker ? <p className="form-section__kicker">{kicker}</p> : null}
          <h2>{title}</h2>
          {description ? <p className="form-section__desc">{description}</p> : null}
        </div>
      </header>
      <div className="form-section__body">{children}</div>
    </section>
  );
}

