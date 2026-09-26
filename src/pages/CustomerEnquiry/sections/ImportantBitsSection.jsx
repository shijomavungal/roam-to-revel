import { FormField } from '../../../components/FormField/FormField';
import { TextInput } from '../../../components/TextInput/TextInput';
import { TextArea } from '../../../components/TextArea/TextArea';
import { CheckboxGroup } from '../../../components/CheckboxGroup/CheckboxGroup';
import {
  ALREADY_BOOKED,
  SPECIAL_REQUIREMENTS,
  TRAVEL_CONFIRMATIONS,
} from '../../../data/enquiryFormConfig';

export function ImportantBitsSection({ formData, errors, updateField, toggleList }) {
  const { importantBits } = formData;

  return (
    <>
      <FormField
        label="Do you have any special requirements?"
        hint="Leave this blank if you have none."
      >
        <CheckboxGroup
          name="specialRequirements"
          options={SPECIAL_REQUIREMENTS}
          values={importantBits.specialRequirements}
          onToggle={(value) => toggleList('importantBits.specialRequirements', value, ['none'])}
        />
      </FormField>

      {importantBits.specialRequirements.includes('other') ? (
        <FormField
          id="specialRequirementsOther"
          errorPath="importantBits.specialRequirementsOther"
          label="Other requirements"
          required
          error={errors['importantBits.specialRequirementsOther']}
        >
          <TextInput
            id="specialRequirementsOther"
            name="specialRequirementsOther"
            value={importantBits.specialRequirementsOther}
            placeholder="Please describe any other needs"
            onChange={(event) => updateField('importantBits.specialRequirementsOther', event.target.value)}
          />
        </FormField>
      ) : null}

      <div className="field-grid two">
        <FormField
          errorPath="importantBits.travelConfirmations"
          label="Please confirm before you travel"
          required
          hint="Tick both boxes to continue."
          error={errors['importantBits.travelConfirmations']}
        >
          <CheckboxGroup
            name="travelConfirmations"
            columns={1}
            options={TRAVEL_CONFIRMATIONS}
            values={importantBits.travelConfirmations}
            onToggle={(value) => toggleList('importantBits.travelConfirmations', value)}
          />
        </FormField>

        <FormField
          label="Have you already booked anything?"
          hint="Leave this blank if you haven't booked anything yet."
        >
          <CheckboxGroup
            name="alreadyBooked"
            columns={1}
            options={ALREADY_BOOKED}
            values={importantBits.alreadyBooked}
            onToggle={(value) => toggleList('importantBits.alreadyBooked', value, ['nothing'])}
          />
        </FormField>
      </div>

      <FormField
        id="doNotWant"
        label="Is there anything you definitely DON'T want on your holiday?"
        hint="e.g. long walking tours, early mornings, crowded places, adventure activities."
      >
        <TextArea
          id="doNotWant"
          name="doNotWant"
          value={importantBits.doNotWant}
          placeholder="Anything we should avoid"
          onChange={(event) => updateField('importantBits.doNotWant', event.target.value)}
        />
      </FormField>
    </>
  );
}
