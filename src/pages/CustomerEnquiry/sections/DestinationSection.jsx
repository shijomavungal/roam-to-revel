import { FormField } from '../../../components/FormField/FormField';
import { TextInput } from '../../../components/TextInput/TextInput';
import { DateInput } from '../../../components/DateInput/DateInput';
import { RadioGroup } from '../../../components/RadioGroup/RadioGroup';
import { ChoiceCards } from '../../../components/ChoiceCards/ChoiceCards';
import {
  DATE_FLEXIBILITY,
  DESTINATION_CERTAINTY,
  FLY_FROM,
  HOLIDAY_TYPES,
} from '../../../data/enquiryFormConfig';

export function DestinationSection({ formData, errors, updateField, toggleList }) {
  const { trip } = formData;
  const today = new Date().toISOString().slice(0, 10);

  return (
    <>
      <FormField
        errorPath="trip.destinationCertainty"
        label="Do you already have a destination in mind?"
        required
        error={errors['trip.destinationCertainty']}
      >
        <RadioGroup
          name="destinationCertainty"
          options={DESTINATION_CERTAINTY}
          value={trip.destinationCertainty}
          onChange={(value) => updateField('trip.destinationCertainty', value)}
        />
      </FormField>

      <FormField
        id="destinations"
        errorPath="trip.destinations"
        label="Which destination(s) are calling your name?"
        required={trip.destinationCertainty !== 'surprise'}
        hint="e.g. Italy, Greece, Japan, Maldives"
        error={errors['trip.destinations']}
      >
        <TextInput
          id="destinations"
          name="destinations"
          value={trip.destinations}
          placeholder="Share a country, city, or a few ideas"
          onChange={(event) => updateField('trip.destinations', event.target.value)}
        />
      </FormField>

      <div className="field-grid two">
        <FormField id="departureDate" label="Departure date">
          <DateInput
            id="departureDate"
            name="departureDate"
            min={today}
            value={trip.departureDate}
            onChange={(event) => updateField('trip.departureDate', event.target.value)}
          />
        </FormField>
        <FormField
          id="returnDate"
          errorPath="trip.returnDate"
          label="Return date"
          error={errors['trip.returnDate']}
        >
          <DateInput
            id="returnDate"
            name="returnDate"
            min={trip.departureDate || today}
            value={trip.returnDate}
            onChange={(event) => updateField('trip.returnDate', event.target.value)}
          />
        </FormField>
      </div>

      <FormField errorPath="trip.dateFlexibility" label="How flexible are your dates?">
        <RadioGroup
          name="dateFlexibility"
          options={DATE_FLEXIBILITY}
          value={trip.dateFlexibility}
          onChange={(value) => updateField('trip.dateFlexibility', value)}
        />
      </FormField>

      <FormField
        errorPath="trip.flyFrom"
        label="Where would you prefer to fly from?"
        required
        error={errors['trip.flyFrom']}
      >
        <RadioGroup
          name="flyFrom"
          columns={2}
          options={FLY_FROM}
          value={trip.flyFrom}
          onChange={(value) => updateField('trip.flyFrom', value)}
        />
      </FormField>

      {trip.flyFrom === 'other' ? (
        <FormField
          id="flyFromOther"
          errorPath="trip.flyFromOther"
          label="Other departure airport / city"
          required
          error={errors['trip.flyFromOther']}
        >
          <TextInput
            id="flyFromOther"
            name="flyFromOther"
            value={trip.flyFromOther}
            placeholder="e.g. Birmingham, Dublin, or nearest airport"
            onChange={(event) => updateField('trip.flyFromOther', event.target.value)}
          />
        </FormField>
      ) : null}

      <FormField
        errorPath="trip.holidayTypes"
        label="What type of holiday are you dreaming of?"
        hint="Select all that apply."
        error={errors['trip.holidayTypes']}
      >
        <ChoiceCards
          name="holidayTypes"
          multiple
          options={HOLIDAY_TYPES}
          values={trip.holidayTypes}
          onToggle={(value) => toggleList('trip.holidayTypes', value)}
        />
      </FormField>
    </>
  );
}
