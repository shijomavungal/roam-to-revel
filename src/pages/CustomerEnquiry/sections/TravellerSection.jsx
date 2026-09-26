import { FormField } from '../../../components/FormField/FormField';
import { TextInput } from '../../../components/TextInput/TextInput';
import { TextArea } from '../../../components/TextArea/TextArea';
import { PhoneInput } from '../../../components/PhoneInput/PhoneInput';
import { ChoiceCards } from '../../../components/ChoiceCards/ChoiceCards';
import { NumberStepper } from '../../../components/NumberStepper/NumberStepper';
import { DateInput } from '../../../components/DateInput/DateInput';
import { GROUP_TYPES } from '../../../data/enquiryFormConfig';
import { childDateBounds, resizeChildDates } from '../../../utils/childDates';

export function TravellerSection({ formData, errors, updateField, handleGroupType }) {
  const { traveller } = formData;
  const childCount = Number(traveller.children) || 0;
  const childDates = traveller.childDatesOfBirth || [];
  const { min: childDobMin, max: childDobMax } = childDateBounds();

  const handleChildrenChange = (count) => {
    updateField('traveller.children', count);
    updateField('traveller.childDatesOfBirth', resizeChildDates(childDates, count));
  };

  return (
    <>
      <div className="field-grid contact">
        <FormField
          id="fullName"
          errorPath="traveller.fullName"
          label="Your name"
          required
          error={errors['traveller.fullName']}
        >
          <TextInput
            id="fullName"
            name="fullName"
            value={traveller.fullName}
            placeholder="e.g. John Smith"
            autoComplete="name"
            onChange={(event) => updateField('traveller.fullName', event.target.value)}
          />
        </FormField>

        <FormField
          id="email"
          errorPath="traveller.email"
          label="Email address"
          required
          error={errors['traveller.email']}
        >
          <TextInput
            id="email"
            name="email"
            type="email"
            value={traveller.email}
            placeholder="you@example.com"
            autoComplete="email"
            onChange={(event) => updateField('traveller.email', event.target.value)}
          />
        </FormField>

        <FormField
          id="whatsappNumber"
          errorPath="traveller.whatsappNumber"
          label="WhatsApp / Mobile number"
          required
          hint="We will use this to share itinerary ideas with you."
          error={errors['traveller.whatsappNumber']}
        >
          <PhoneInput
            id="whatsappNumber"
            countryCode={traveller.whatsappCountryCode}
            number={traveller.whatsappNumber}
            onCountryChange={(event) => updateField('traveller.whatsappCountryCode', event.target.value)}
            onNumberChange={(event) => updateField('traveller.whatsappNumber', event.target.value)}
          />
        </FormField>
      </div>

      <FormField
        errorPath="traveller.groupType"
        label="Who's coming along?"
        error={errors['traveller.groupType']}
      >
        <ChoiceCards
          name="groupType"
          options={GROUP_TYPES}
          value={traveller.groupType}
          onChange={handleGroupType}
        />
      </FormField>

      <FormField
        errorPath="traveller.adults"
        label="Number of travellers"
        required
        error={errors['traveller.adults'] || errors['traveller.children']}
      >
        <div className="stepper-stack">
          <NumberStepper
            id="adults"
            label="Adults"
            hint="18+"
            min={1}
            value={traveller.adults}
            onChange={(value) => updateField('traveller.adults', value)}
          />
          <NumberStepper
            id="children"
            label="Children"
            hint="Under 18"
            value={traveller.children}
            onChange={handleChildrenChange}
          />
        </div>
      </FormField>

      {childCount > 0 ? (
        <div className="child-dobs">
          <p className="child-dobs__label">Date of birth for each child</p>
          <p className="helper-text">Children are aged under 18.</p>
          <div className="field-grid two">
            {Array.from({ length: childCount }, (_, index) => (
              <FormField
                key={`child-dob-${index}`}
                id={`childDob-${index}`}
                errorPath={`traveller.childDatesOfBirth.${index}`}
                label={`Child ${index + 1}`}
                required
                error={errors[`traveller.childDatesOfBirth.${index}`]}
              >
                <DateInput
                  id={`childDob-${index}`}
                  name={`childDob-${index}`}
                  min={childDobMin}
                  max={childDobMax}
                  value={childDates[index] || ''}
                  placeholder="Select date of birth"
                  title={`Child ${index + 1}'s birthday`}
                  onChange={(value) => updateField(`traveller.childDatesOfBirth.${index}`, value)}
                />
              </FormField>
            ))}
          </div>
        </div>
      ) : null}

      <FormField
        id="travelGangNotes"
        label="Tell us a little about your travel gang"
        hint="e.g. family with 2 children, honeymooners, elderly parents, etc."
      >
        <TextArea
          id="travelGangNotes"
          name="travelGangNotes"
          value={traveller.travelGangNotes}
          placeholder="Who is travelling, and what should we keep in mind?"
          onChange={(event) => updateField('traveller.travelGangNotes', event.target.value)}
        />
      </FormField>
    </>
  );
}
