import { FormField } from '../../../components/FormField/FormField';
import { RadioGroup } from '../../../components/RadioGroup/RadioGroup';
import { CheckboxGroup } from '../../../components/CheckboxGroup/CheckboxGroup';
import {
  ACCOMMODATION_PRIORITIES,
  ACCOMMODATION_TYPES,
  BUDGET_INCLUDES,
  BUDGET_RANGES,
} from '../../../data/enquiryFormConfig';

export function BudgetSection({ formData, errors, updateField, toggleList }) {
  const { budget } = formData;

  return (
    <>
      <FormField
        errorPath="budget.range"
        label="What is your approximate holiday budget?"
        required
        error={errors['budget.range']}
      >
        <RadioGroup
          name="budgetRange"
          columns={2}
          options={BUDGET_RANGES}
          value={budget.range}
          onChange={(value) => updateField('budget.range', value)}
        />
      </FormField>

      <FormField
        errorPath="budget.includes"
        label="What does your budget need to include?"
        required
        hint="Select everything that should be covered."
        error={errors['budget.includes']}
      >
        <CheckboxGroup
          name="budgetIncludes"
          options={BUDGET_INCLUDES}
          values={budget.includes}
          onToggle={(value) => toggleList('budget.includes', value)}
        />
      </FormField>

      <FormField
        errorPath="budget.accommodationTypes"
        label="What type of accommodation do you prefer?"
        required
        hint="You can choose more than one."
        error={errors['budget.accommodationTypes']}
      >
        <CheckboxGroup
          name="accommodationTypes"
          options={ACCOMMODATION_TYPES}
          values={budget.accommodationTypes}
          onToggle={(value) => toggleList('budget.accommodationTypes', value)}
        />
      </FormField>

      <FormField
        errorPath="budget.accommodationPriorities"
        label="What matters most when choosing accommodation?"
        hint="Pick the details that matter most."
      >
        <CheckboxGroup
          name="accommodationPriorities"
          options={ACCOMMODATION_PRIORITIES}
          values={budget.accommodationPriorities}
          onToggle={(value) => toggleList('budget.accommodationPriorities', value)}
        />
      </FormField>
    </>
  );
}
