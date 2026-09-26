import { FormField } from '../../../components/FormField/FormField';
import { CheckboxGroup } from '../../../components/CheckboxGroup/CheckboxGroup';
import { SelectInput } from '../../../components/SelectInput/SelectInput';
import { TextInput } from '../../../components/TextInput/TextInput';
import {
  ACCOMMODATION_PRIORITIES,
  ACCOMMODATION_TYPES,
  BUDGET_CURRENCIES,
  BUDGET_INCLUDES,
} from '../../../data/enquiryFormConfig';
import './BudgetSection.css';

export function BudgetSection({ formData, errors, updateField, toggleList }) {
  const { budget } = formData;

  return (
    <>
      <FormField
        id="budgetAmount"
        errorPath="budget.amount"
        label="What is your approximate holiday budget per head?"
        hint="Leave this blank if you are not sure yet."
        error={errors['budget.amount']}
      >
        <div className="budget-amount">
          <label className="visually-hidden" htmlFor="budgetCurrency">
            Currency
          </label>
          <SelectInput
            id="budgetCurrency"
            name="budgetCurrency"
            value={budget.currency}
            options={BUDGET_CURRENCIES}
            onChange={(event) => updateField('budget.currency', event.target.value)}
          />
          <TextInput
            id="budgetAmount"
            name="budgetAmount"
            inputMode="decimal"
            value={budget.amount}
            placeholder="Enter an amount"
            onChange={(event) => updateField('budget.amount', event.target.value)}
          />
        </div>
      </FormField>

      <FormField
        label="What does your budget need to include?"
        hint="Select everything that should be covered. Leave this blank if you are not sure yet."
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
