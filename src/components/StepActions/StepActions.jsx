import { Icon } from '../Icon/Icon';
import './StepActions.css';

export function StepActions({
  isFirst,
  isLast,
  submitting,
  onBack,
  nextLabel = 'Next',
}) {
  return (
    <div className="step-actions">
      <button type="button" className="step-actions__back" onClick={onBack} disabled={isFirst}>
        Back
      </button>
      {isLast ? (
        <button type="submit" className="step-actions__next" disabled={submitting}>
          <span>{submitting ? 'Submitting…' : 'Submit Enquiry'}</span>
          {submitting ? null : (
            <span className="step-actions__plane" aria-hidden="true">
              <Icon name="plane" size={18} />
            </span>
          )}
        </button>
      ) : (
        <button type="submit" className="step-actions__next">
          <span>{nextLabel}</span>
          <span className="step-actions__plane" aria-hidden="true">
            <Icon name="plane" size={18} />
          </span>
        </button>
      )}
    </div>
  );
}
