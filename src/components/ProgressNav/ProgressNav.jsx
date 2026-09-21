import { enquirySections } from '../../data/enquiryFormConfig';
import './ProgressNav.css';

export function ProgressNav({ currentIndex, maxReached = 0, errorPrefixes = [], onSelect }) {
  const progress = currentIndex / (enquirySections.length - 1);

  return (
    <nav className="progress-nav" aria-label="Enquiry progress">
      <div className="progress-nav__track">
        <span className="progress-nav__fill" style={{ width: `${progress * 100}%` }} />
        <span className="progress-nav__plane" style={{ left: `${progress * 100}%` }} />
      </div>
      <div className="progress-nav__steps">
        {enquirySections.map((section, index) => {
          const state =
            index === currentIndex ? 'is-current' : index <= maxReached ? 'is-done' : 'is-upcoming';
          const hasError = errorPrefixes.includes(section.id);
          const canSelect = index <= maxReached;

          return (
            <button
              key={section.id}
              type="button"
              className={`progress-nav__item ${state} ${hasError ? 'has-error' : ''}`}
              onClick={() => canSelect && onSelect?.(index)}
              disabled={!canSelect}
              aria-current={index === currentIndex ? 'step' : undefined}
            >
              <span>{index < currentIndex ? '✓' : section.number}</span>
              <em>{section.title}</em>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
