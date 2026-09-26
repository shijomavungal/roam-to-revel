export function TextArea({ id, name, value, onChange, placeholder, rows = 2 }) {
  return (
    <textarea
      id={id}
      name={name}
      className="textarea-control"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
    />
  );
}
