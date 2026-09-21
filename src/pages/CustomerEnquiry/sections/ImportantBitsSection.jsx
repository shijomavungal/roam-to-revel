import { FormField } from '../../../components/FormField/FormField';
import { TextInput } from '../../../components/TextInput/TextInput';
import { TextArea } from '../../../components/TextArea/TextArea';
import { RadioGroup } from '../../../components/RadioGroup/RadioGroup';
import { CheckboxGroup } from '../../../components/CheckboxGroup/CheckboxGroup';
import {
  ALREADY_BOOKED,
  PASSPORT_STATUS,
  SPECIAL_REQUIREMENTS,
} from '../../../data/enquiryFormConfig';

export function ImportantBitsSection({ formData, errors, updateField, toggleList }) {
  const { importantBits } = formData;

  return (
    <>
      <FormField
        errorPath="importantBits.specialRequirements"
        label="Do you have any special requirements?"
        required
        error={errors['importantBits.specialRequirements']}
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
          errorPath="importantBits.passportsReady"
          label="Do you already have passports and necessary travel documents?"
          required
          error={errors['importantBits.passportsReady']}
        >
          <RadioGroup
            name="passportsReady"
            options={PASSPORT_STATUS}
            value={importantBits.passportsReady}
            onChange={(value) => updateField('importantBits.passportsReady', value)}
          />
        </FormField>

        <FormField
          errorPath="importantBits.alreadyBooked"
          label="Have you already booked anything?"
          required
          error={errors['importantBits.alreadyBooked']}
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
