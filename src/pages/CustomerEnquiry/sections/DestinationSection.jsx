import { FormField } from '../../../components/FormField/FormField';
import { TextInput } from '../../../components/TextInput/TextInput';
import { RadioGroup } from '../../../components/RadioGroup/RadioGroup';
import { TripDateRange } from '../../../components/TripDateRange/TripDateRange';
import { ChoiceCards } from '../../../components/ChoiceCards/ChoiceCards';
import { AirportInput } from '../../../components/AirportInput/AirportInput';
import {
  DATE_FLEXIBILITY,
  DESTINATION_CERTAINTY,
  HOLIDAY_TYPES,
  YES_NO,
} from '../../../data/enquiryFormConfig';

export function DestinationSection({ formData, errors, updateField, toggleList }) {
  const { trip } = formData;

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

      <TripDateRange
        departureDate={trip.departureDate}
        returnDate={trip.returnDate}
        returnError={errors['trip.returnDate']}
        onDepartureChange={(value) => updateField('trip.departureDate', value)}
        onReturnChange={(value) => updateField('trip.returnDate', value)}
      />

      <FormField errorPath="trip.dateFlexibility" label="How flexible are your dates?">
        <RadioGroup
          name="dateFlexibility"
          options={DATE_FLEXIBILITY}
          value={trip.dateFlexibility}
          onChange={(value) => updateField('trip.dateFlexibility', value)}
        />
      </FormField>

      <FormField
        id="flyFrom"
        errorPath="trip.flyFrom"
        label="Where would you prefer to fly from?"
        required
        hint="Start typing and choose an airport from the list."
        error={errors['trip.flyFrom']}
      >
        <AirportInput
          id="flyFrom"
          name="flyFrom"
          value={trip.flyFrom}
          onChange={(value) => updateField('trip.flyFrom', value)}
        />
      </FormField>

      <FormField
        errorPath="trip.flexibleNearestAirport"
        label="Are you flexible if any other nearest airports are available?"
        required
        error={errors['trip.flexibleNearestAirport']}
      >
        <RadioGroup
          name="flexibleNearestAirport"
          columns={2}
          options={YES_NO}
          value={trip.flexibleNearestAirport}
          onChange={(value) => updateField('trip.flexibleNearestAirport', value)}
        />
      </FormField>

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
