export function DateInput({ id, name, value, onChange, min, max }) {
  return (
    <input
      id={id}
      name={name}
      type="date"
      className="control"
      value={value}
      min={min}
      max={max}
      onChange={onChange}
    />
  );
}
