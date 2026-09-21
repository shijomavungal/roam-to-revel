import './FormField.css';

export function FormField({
  id,
  label,
  required,
  hint,
  error,
  errorPath,
  children,
}) {
  return (
    <div className={`form-field ${error ? 'has-error' : ''}`} data-error-path={errorPath || id}>
      {label ? (
        <label className="form-field__label" htmlFor={id}>
          {label}
          {required ? <span className="required-mark">*</span> : null}
        </label>
      ) : null}
      {children}
      {hint && !error ? <p className="helper-text">{hint}</p> : null}
      {error ? <p className="field-error">{error}</p> : null}
    </div>
  );
}
