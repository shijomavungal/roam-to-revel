import { FormField } from '../../../components/FormField/FormField';
import { TextInput } from '../../../components/TextInput/TextInput';
import { TextArea } from '../../../components/TextArea/TextArea';
import { RadioGroup } from '../../../components/RadioGroup/RadioGroup';
import { CheckboxGroup } from '../../../components/CheckboxGroup/CheckboxGroup';
import { HOLIDAY_PACE, MUST_INCLUDE } from '../../../data/enquiryFormConfig';

export function VibeSection({ formData, errors, updateField, toggleList }) {
  const { vibe } = formData;

  return (
    <>
      <FormField
        errorPath="vibe.pace"
        label="Your ideal holiday pace is..."
        error={errors['vibe.pace']}
      >
        <RadioGroup
          name="pace"
          options={HOLIDAY_PACE}
          value={vibe.pace}
          onChange={(value) => updateField('vibe.pace', value)}
        />
      </FormField>

      <FormField
        errorPath="vibe.mustInclude"
        label="What must your holiday include?"
        hint="Tick all that apply."
        error={errors['vibe.mustInclude']}
      >
        <CheckboxGroup
          name="mustInclude"
          options={MUST_INCLUDE}
          values={vibe.mustInclude}
          onToggle={(value) => toggleList('vibe.mustInclude', value)}
        />
      </FormField>

      {vibe.mustInclude.includes('other') ? (
        <FormField
          id="mustIncludeOther"
          errorPath="vibe.mustIncludeOther"
          label="Other must-haves"
          required
          error={errors['vibe.mustIncludeOther']}
        >
          <TextInput
            id="mustIncludeOther"
            name="mustIncludeOther"
            value={vibe.mustIncludeOther}
            placeholder="Tell us what else should be included"
            onChange={(event) => updateField('vibe.mustIncludeOther', event.target.value)}
          />
        </FormField>
      ) : null}

      <FormField
        id="wowFactor"
        label={`What would make you say, "WOW, this holiday was worth every penny"?`}
        hint="Tell us what experiences, places or moments matter most to you."
      >
        <TextArea
          id="wowFactor"
          name="wowFactor"
          value={vibe.wowFactor}
          placeholder="The moments that would make this trip unforgettable"
          onChange={(event) => updateField('vibe.wowFactor', event.target.value)}
        />
      </FormField>
    </>
  );
}
