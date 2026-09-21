export function SelectInput({ id, name, value, onChange, options, placeholder }) {
  return (
    <select id={id} name={name} className="select-control" value={value} onChange={onChange}>
      {placeholder ? <option value="">{placeholder}</option> : null}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
