import { enquirySections } from '../../data/enquiryFormConfig';
import { stepThemeStyle } from '../../utils/stepTheme';
import { Icon } from '../Icon/Icon';
import './ProgressNav.css';

const TRACK_GRADIENT = `linear-gradient(90deg, ${enquirySections
  .map((section) => section.theme?.accent)
  .filter(Boolean)
  .join(', ')})`;

export function ProgressNav({ currentIndex, maxReached = 0, errorPrefixes = [], onSelect }) {
  const progress = currentIndex / (enquirySections.length - 1);

  return (
    <nav className="progress-nav" aria-label="Enquiry progress">
      <div className="progress-nav__track">
        <span
          className="progress-nav__fill"
          style={{ backgroundImage: TRACK_GRADIENT, clipPath: `inset(0 ${(1 - progress) * 100}% 0 0 round 99px)` }}
        />
        <span className="progress-nav__plane" style={{ left: `${progress * 100}%` }}>
          <Icon name="plane" size={16} />
        </span>
      </div>
      <div className="progress-nav__steps">
        {enquirySections.map((section, index) => {
          const isCurrent = index === currentIndex;
          const isDone = !isCurrent && index <= maxReached;
          const state = isCurrent ? 'is-current' : isDone ? 'is-done' : 'is-upcoming';
          const hasError = errorPrefixes.includes(section.id);
          const canSelect = index <= maxReached;

          return (
            <button
              key={section.id}
              type="button"
              className={`progress-nav__item ${state} ${hasError ? 'has-error' : ''}`}
              style={stepThemeStyle(section.theme)}
              onClick={() => canSelect && onSelect?.(index)}
              disabled={!canSelect}
              aria-current={isCurrent ? 'step' : undefined}
              aria-label={`Step ${section.number}: ${section.title}`}
            >
              {isDone && !hasError ? (
                <span className="progress-nav__tick" aria-hidden="true">
                  <Icon name="check" size={10} />
                </span>
              ) : null}
              <span className="progress-nav__icon">
                <Icon name={section.icon} size={20} />
              </span>
              <em>{section.title}</em>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
