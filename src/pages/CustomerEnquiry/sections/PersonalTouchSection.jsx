import { FormField } from '../../../components/FormField/FormField';
import { TextArea } from '../../../components/TextArea/TextArea';
import { RadioGroup } from '../../../components/RadioGroup/RadioGroup';
import { CheckboxGroup } from '../../../components/CheckboxGroup/CheckboxGroup';
import { HOLIDAY_PERSONALITY, SPECIAL_OCCASIONS } from '../../../data/enquiryFormConfig';

export function PersonalTouchSection({ formData, errors, updateField, toggleList }) {
  const { personalTouch } = formData;

  return (
    <>
      <FormField
        errorPath="personalTouch.holidayPersonality"
        label="If your holiday had a personality, what would it be?"
        required
        error={errors['personalTouch.holidayPersonality']}
      >
        <RadioGroup
          name="holidayPersonality"
          columns={2}
          options={HOLIDAY_PERSONALITY}
          value={personalTouch.holidayPersonality}
          onChange={(value) => updateField('personalTouch.holidayPersonality', value)}
        />
      </FormField>

      <FormField
        id="dreamExperience"
        label="What is one thing you've always dreamed of doing or seeing on this trip?"
        hint="e.g. watch the Northern Lights, visit the Colosseum, swim with dolphins."
      >
        <TextArea
          id="dreamExperience"
          name="dreamExperience"
          value={personalTouch.dreamExperience}
          placeholder="One experience that would make this trip magical"
          onChange={(event) => updateField('personalTouch.dreamExperience', event.target.value)}
        />
      </FormField>

      <FormField errorPath="personalTouch.specialOccasion" label="Is this trip for a special occasion?">
        <CheckboxGroup
          name="specialOccasion"
          options={SPECIAL_OCCASIONS}
          values={personalTouch.specialOccasion}
          onToggle={(value) => toggleList('personalTouch.specialOccasion', value)}
        />
      </FormField>

      <FormField
        id="additionalNotes"
        label="Anything else you'd like us to know?"
        hint="Additional details, questions, or a little more about your travel dreams."
      >
        <TextArea
          id="additionalNotes"
          name="additionalNotes"
          value={personalTouch.additionalNotes}
          placeholder="Share anything else that would help us plan"
          onChange={(event) => updateField('personalTouch.additionalNotes', event.target.value)}
        />
      </FormField>
    </>
  );
}
