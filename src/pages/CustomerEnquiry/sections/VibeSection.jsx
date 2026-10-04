import { FormField } from '../../../components/FormField/FormField';
import { ChoiceCards } from '../../../components/ChoiceCards/ChoiceCards';
import { HOLIDAY_VIBES } from '../../../data/enquiryFormConfig';

export function VibeSection({ formData, errors, toggleList }) {
  const { vibe } = formData;

  return (
    <>
      <FormField
        errorPath="vibe.holidayVibes"
        label="What would make this trip perfect for you?"
        hint="Choose everything that sounds like you."
        error={errors['vibe.holidayVibes']}
      >
        <ChoiceCards
          name="holidayVibes"
          multiple
          options={HOLIDAY_VIBES}
          values={vibe.holidayVibes}
          onToggle={(value) => toggleList('vibe.holidayVibes', value)}
        />
      </FormField>
    </>
  );
}
