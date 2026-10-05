import { FormField } from '../../../components/FormField/FormField';
import { TextArea } from '../../../components/TextArea/TextArea';
import { ChoiceCards } from '../../../components/ChoiceCards/ChoiceCards';
import { DateInput } from '../../../components/DateInput/DateInput';
import { HOLIDAY_VIBES, SPECIAL_OCCASIONS } from '../../../data/enquiryFormConfig';
import { formatISO } from '../../../utils/calendar';

const OCCASION_DATES = [
  { occasion: 'birthday', field: 'birthdayDate', label: 'Birthday date', icon: 'cake' },
  { occasion: 'anniversary', field: 'anniversaryDate', label: 'Anniversary date', icon: 'rings' },
];

function yearsFromToday(years) {
  const date = new Date();
  date.setFullYear(date.getFullYear() + years);
  return formatISO(date);
}

const OCCASION_DATE_MIN = yearsFromToday(-100);
const OCCASION_DATE_MAX = yearsFromToday(2);

export function PersonalTouchSection({ formData, errors, updateField, toggleList }) {
  const { personalTouch } = formData;
  const occasionDates = OCCASION_DATES.filter(({ occasion }) =>
    personalTouch.specialOccasion.includes(occasion),
  );

  const handleOccasionToggle = (value) => {
    const dated = OCCASION_DATES.find(({ occasion }) => occasion === value);
    if (dated && personalTouch.specialOccasion.includes(value)) {
      updateField(`personalTouch.${dated.field}`, '');
    }
    toggleList('personalTouch.specialOccasion', value);
  };

  return (
    <>
      <FormField
        errorPath="personalTouch.holidayVibes"
        label="What would make this trip perfect for you?"
        hint="Choose everything that sounds like you."
        error={errors['personalTouch.holidayVibes']}
      >
        <ChoiceCards
          name="holidayVibes"
          multiple
          options={HOLIDAY_VIBES}
          values={personalTouch.holidayVibes}
          onToggle={(value) => toggleList('personalTouch.holidayVibes', value)}
        />
      </FormField>

      <FormField errorPath="personalTouch.specialOccasion" label="Is this trip for a special occasion?">
        <ChoiceCards
          name="specialOccasion"
          multiple
          options={SPECIAL_OCCASIONS}
          values={personalTouch.specialOccasion}
          onToggle={handleOccasionToggle}
        />
      </FormField>

      {occasionDates.length ? (
        <div className={`field-grid ${occasionDates.length > 1 ? 'two' : ''}`}>
          {occasionDates.map(({ field, label, icon }) => (
            <FormField key={field} id={field} label={label} hint="Optional">
              <DateInput
                id={field}
                name={field}
                value={personalTouch[field]}
                min={OCCASION_DATE_MIN}
                max={OCCASION_DATE_MAX}
                placeholder="Select a date"
                title={label}
                icon={icon}
                showAge={false}
                onChange={(value) => updateField(`personalTouch.${field}`, value)}
              />
            </FormField>
          ))}
        </div>
      ) : null}

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
