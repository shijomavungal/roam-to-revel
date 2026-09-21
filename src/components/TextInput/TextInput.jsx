export function TextInput({
  id,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  autoComplete,
  inputMode,
}) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      className="control"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete={autoComplete}
      inputMode={inputMode}
    />
  );
}
