import './SubmitButton.css';

export function SubmitButton({ children, loading, disabled }) {
  return (
    <button type="submit" className="submit-button" disabled={disabled || loading}>
      {loading ? 'Submitting enquiry…' : children}
    </button>
  );
}
