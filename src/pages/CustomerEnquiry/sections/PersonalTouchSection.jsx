import { FormField } from '../../../components/FormField/FormField';
import { TextArea } from '../../../components/TextArea/TextArea';
import { ChoiceCards } from '../../../components/ChoiceCards/ChoiceCards';
import { HOLIDAY_PERSONALITY, SPECIAL_OCCASIONS } from '../../../data/enquiryFormConfig';

export function PersonalTouchSection({ formData, updateField, toggleList }) {
  const { personalTouch } = formData;

  return (
    <>
      <FormField
        label="If your holiday had a personality, what would it be?"
        hint="Leave this blank if you're not sure."
      >
        <ChoiceCards
          name="holidayPersonality"
          options={HOLIDAY_PERSONALITY}
          value={personalTouch.holidayPersonality}
          onChange={(value) => updateField('personalTouch.holidayPersonality', value)}
        />
      </FormField>

      <FormField errorPath="personalTouch.specialOccasion" label="Is this trip for a special occasion?">
        <ChoiceCards
          name="specialOccasion"
          multiple
          options={SPECIAL_OCCASIONS}
          values={personalTouch.specialOccasion}
          onToggle={(value) => toggleList('personalTouch.specialOccasion', value)}
        />
      </FormField>

      <div className="field-grid two">
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
      </div>
    </>
  );
}
