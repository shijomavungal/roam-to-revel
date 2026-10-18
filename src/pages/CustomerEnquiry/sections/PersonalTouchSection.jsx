import { FormField } from '../../../components/FormField/FormField';
import { TextArea } from '../../../components/TextArea/TextArea';
import { TextInput } from '../../../components/TextInput/TextInput';
import { PhoneInput } from '../../../components/PhoneInput/PhoneInput';
import { ChoiceCards } from '../../../components/ChoiceCards/ChoiceCards';
import { DateInput } from '../../../components/DateInput/DateInput';
import { HEARD_ABOUT, HOLIDAY_VIBES, SPECIAL_OCCASIONS } from '../../../data/enquiryFormConfig';
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

  const heardAbout = personalTouch.heardAbout || {};
  const referrer = heardAbout.referrer || {};

  const handleHeardAbout = (value) => {
    updateField('personalTouch.heardAbout.channel', value);
    if (value !== 'other') {
      updateField('personalTouch.heardAbout.otherDetail', '');
    }
    if (value !== 'referral') {
      updateField('personalTouch.heardAbout.referrer.name', '');
      updateField('personalTouch.heardAbout.referrer.whatsappNumber', '');
      updateField('personalTouch.heardAbout.referrer.email', '');
    } else if (!referrer.whatsappCountryCode) {
      updateField(
        'personalTouch.heardAbout.referrer.whatsappCountryCode',
        formData.traveller.whatsappCountryCode,
      );
    }
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

      <FormField
        errorPath="personalTouch.heardAbout.channel"
        label="How did you hear about Roam To Revel?"
        hint="Optional — skip this if you prefer."
        error={errors['personalTouch.heardAbout.channel']}
      >
        <ChoiceCards
          name="heardAbout"
          options={HEARD_ABOUT}
          value={heardAbout.channel}
          onChange={handleHeardAbout}
        />
      </FormField>

      {heardAbout.channel === 'other' ? (
        <div className="destination-followup">
          <FormField
            id="heardAboutOther"
            errorPath="personalTouch.heardAbout.otherDetail"
            label="Please tell us a little more"
            hint="Optional"
            error={errors['personalTouch.heardAbout.otherDetail']}
          >
            <TextInput
              id="heardAboutOther"
              name="heardAboutOther"
              value={heardAbout.otherDetail}
              placeholder="e.g. a travel blog, a magazine, or an event"
              onChange={(event) =>
                updateField('personalTouch.heardAbout.otherDetail', event.target.value)
              }
            />
          </FormField>
        </div>
      ) : null}

      {heardAbout.channel === 'referral' ? (
        <div className="destination-followup">
          <p className="helper-text">
            If a friend sent you our way, tell us who — we'd love to thank them.
          </p>
          <div className="field-grid contact">
            <FormField
              id="referrerName"
              errorPath="personalTouch.heardAbout.referrer.name"
              label="Their name"
              required
              error={errors['personalTouch.heardAbout.referrer.name']}
            >
              <TextInput
                id="referrerName"
                name="referrerName"
                value={referrer.name}
                placeholder="e.g. Priya Sharma"
                autoComplete="off"
                onChange={(event) =>
                  updateField('personalTouch.heardAbout.referrer.name', event.target.value)
                }
              />
            </FormField>

            <FormField
              id="referrerEmail"
              errorPath="personalTouch.heardAbout.referrer.email"
              label="Their email address"
              hint="Optional"
              error={errors['personalTouch.heardAbout.referrer.email']}
            >
              <TextInput
                id="referrerEmail"
                name="referrerEmail"
                type="email"
                value={referrer.email}
                placeholder="friend@example.com"
                autoComplete="off"
                onChange={(event) =>
                  updateField('personalTouch.heardAbout.referrer.email', event.target.value)
                }
              />
            </FormField>

            <FormField
              id="referrerWhatsapp"
              errorPath="personalTouch.heardAbout.referrer.whatsappNumber"
              label="Their WhatsApp / mobile number"
              required
              hint="We'll use this to thank the right person."
              error={errors['personalTouch.heardAbout.referrer.whatsappNumber']}
            >
              <PhoneInput
                id="referrerWhatsapp"
                countryCode={referrer.whatsappCountryCode}
                number={referrer.whatsappNumber}
                onCountryChange={(event) =>
                  updateField(
                    'personalTouch.heardAbout.referrer.whatsappCountryCode',
                    event.target.value,
                  )
                }
                onNumberChange={(event) =>
                  updateField('personalTouch.heardAbout.referrer.whatsappNumber', event.target.value)
                }
              />
            </FormField>
          </div>
        </div>
      ) : null}
    </>
  );
}
