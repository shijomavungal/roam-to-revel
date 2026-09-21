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
          {submitting ? 'Submitting…' : 'Submit Enquiry'}
        </button>
      ) : (
        <button type="submit" className="step-actions__next">
          {nextLabel}
        </button>
      )}
    </div>
  );
}
