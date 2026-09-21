import { COUNTRY_CODES } from '../../data/enquiryFormConfig';
import './PhoneInput.css';

export function PhoneInput({
  id,
  countryCode,
  number,
  onCountryChange,
  onNumberChange,
}) {
  return (
    <div className="phone-input">
      <label className="visually-hidden" htmlFor={`${id}-code`}>
        Country code
      </label>
      <select
        id={`${id}-code`}
        className="select-control phone-input__code"
        value={countryCode}
        onChange={onCountryChange}
      >
        {COUNTRY_CODES.map((code) => (
          <option key={code.value} value={code.value}>
            {code.label}
          </option>
        ))}
      </select>
      <input
        id={id}
        type="tel"
        className="control"
        inputMode="tel"
        autoComplete="tel"
        placeholder="Phone number"
        value={number}
        onChange={onNumberChange}
      />
    </div>
  );
}
