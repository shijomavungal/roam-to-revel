import { useEffect } from 'react';
import { FormField } from '../../../components/FormField/FormField';
import { TextInput } from '../../../components/TextInput/TextInput';
import { RadioGroup } from '../../../components/RadioGroup/RadioGroup';
import { TripDateRange } from '../../../components/TripDateRange/TripDateRange';
import { ChoiceCards } from '../../../components/ChoiceCards/ChoiceCards';
import { AirportInput } from '../../../components/AirportInput/AirportInput';
import {
  DATE_FLEXIBILITY,
  DESTINATION_CERTAINTY,
  YES_NO,
} from '../../../data/enquiryFormConfig';

const DESTINATION_PROMPTS = {
  decided: {
    label: 'Which destination is calling your name?',
    placeholder: 'e.g. The Maldives',
    hint: 'A country, city, or region is perfect.',
  },
  ideas: {
    label: 'Which destinations are calling your name?',
    placeholder: 'e.g. Italy, Greece, or Japan',
    hint: 'Share as many as you like.',
  },
};

export function DestinationSection({ formData, errors, updateField }) {
  const { trip } = formData;
  const destinationPrompt = DESTINATION_PROMPTS[trip.destinationCertainty];

  useEffect(() => {
    if (!destinationPrompt) return;
    document.getElementById('destinations')?.focus();
  }, [trip.destinationCertainty, destinationPrompt]);

  return (
    <>
      <FormField
        errorPath="trip.destinationCertainty"
        label="Do you already have a destination in mind?"
        required
        error={errors['trip.destinationCertainty']}
      >
        <div className="destination-choices">
          <ChoiceCards
            name="destinationCertainty"
            options={DESTINATION_CERTAINTY}
            value={trip.destinationCertainty}
            onChange={(value) => updateField('trip.destinationCertainty', value)}
          />
        </div>
      </FormField>

      {destinationPrompt ? (
        <div className="destination-followup" key={trip.destinationCertainty}>
          <FormField
            id="destinations"
            errorPath="trip.destinations"
            label={destinationPrompt.label}
            required
            hint={destinationPrompt.hint}
            error={errors['trip.destinations']}
          >
            <TextInput
              id="destinations"
              name="destinations"
              value={trip.destinations}
              placeholder={destinationPrompt.placeholder}
              onChange={(event) => updateField('trip.destinations', event.target.value)}
            />
          </FormField>
        </div>
      ) : null}

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

      <div className="field-grid two">
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
      </div>
    </>
  );
}
