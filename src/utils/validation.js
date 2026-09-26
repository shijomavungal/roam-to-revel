import { SECTION_PREFIX, TRAVEL_CONFIRMATIONS } from '../data/enquiryFormConfig';
import { isChildDateOfBirth } from './childDates';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9+\s()-]{7,18}$/;

function setError(errors, path, message) {
  errors[path] = message;
}

export function validateEnquiry(formData) {
  const errors = {};
  const { traveller, trip, vibe, budget, importantBits } = formData;

  if (!traveller.fullName.trim()) {
    setError(errors, 'traveller.fullName', 'Please enter your name.');
  } else if (traveller.fullName.trim().length < 2) {
    setError(errors, 'traveller.fullName', 'Name must be at least 2 characters.');
  }

  if (!traveller.email.trim()) {
    setError(errors, 'traveller.email', 'Please enter your email address.');
  } else if (!EMAIL_PATTERN.test(traveller.email.trim())) {
    setError(errors, 'traveller.email', 'Please enter a valid email address.');
  }

  if (!traveller.whatsappNumber.trim()) {
    setError(errors, 'traveller.whatsappNumber', 'Please enter your WhatsApp / mobile number.');
  } else if (!PHONE_PATTERN.test(traveller.whatsappNumber.trim())) {
    setError(errors, 'traveller.whatsappNumber', 'Please enter a valid phone number.');
  }

  const adults = Number(traveller.adults);
  const children = Number(traveller.children);

  if (!Number.isInteger(adults) || adults < 1) {
    setError(errors, 'traveller.adults', 'At least one adult (18+) is required.');
  }
  if (!Number.isInteger(children) || children < 0) {
    setError(errors, 'traveller.children', 'Children must be 0 or more.');
  } else {
    const dates = traveller.childDatesOfBirth || [];
    for (let index = 0; index < children; index += 1) {
      const dob = String(dates[index] || '').trim();
      if (!dob) {
        setError(errors, `traveller.childDatesOfBirth.${index}`, `Please enter the date of birth for child ${index + 1}.`);
      } else if (!isChildDateOfBirth(dob)) {
        setError(
          errors,
          `traveller.childDatesOfBirth.${index}`,
          `Child ${index + 1} should be under 18 years old.`,
        );
      }
    }
  }

  if (!trip.destinationCertainty) {
    setError(errors, 'trip.destinationCertainty', 'Please tell us how decided you are on a destination.');
  }

  if (trip.destinationCertainty !== 'surprise' && !trip.destinations.trim()) {
    setError(errors, 'trip.destinations', 'Please share at least one destination or idea.');
  }

  if (trip.departureDate && trip.returnDate && trip.returnDate < trip.departureDate) {
    setError(errors, 'trip.returnDate', 'Return date must be on or after the departure date.');
  }

  if (!trip.flyFrom) {
    setError(errors, 'trip.flyFrom', 'Please select a departure airport.');
  }

  if (!trip.flexibleNearestAirport) {
    setError(errors, 'trip.flexibleNearestAirport', 'Please choose Yes or No.');
  }

  if (vibe.mustInclude.includes('other') && !vibe.mustIncludeOther.trim()) {
    setError(errors, 'vibe.mustIncludeOther', 'Please tell us what else the holiday must include.');
  }

  const budgetAmount = String(budget.amount || '').trim();
  if (budgetAmount) {
    const numeric = Number(budgetAmount.replace(/,/g, ''));
    if (!Number.isFinite(numeric) || numeric <= 0) {
      setError(errors, 'budget.amount', 'Please enter a valid amount.');
    }
  }

  if (!budget.accommodationTypes.length) {
    setError(errors, 'budget.accommodationTypes', 'Please choose at least one accommodation preference.');
  }

  if (
    importantBits.specialRequirements.includes('other') &&
    !importantBits.specialRequirementsOther.trim()
  ) {
    setError(errors, 'importantBits.specialRequirementsOther', 'Please describe your other requirements.');
  }

  const confirmations = importantBits.travelConfirmations || [];
  if (!TRAVEL_CONFIRMATIONS.every((option) => confirmations.includes(option.value))) {
    setError(
      errors,
      'importantBits.travelConfirmations',
      'Please confirm passport validity and travel insurance for all travelling members.',
    );
  }

  return errors;
}

export function validateSection(formData, sectionId) {
  const all = validateEnquiry(formData);
  const prefix = SECTION_PREFIX[sectionId];
  const errors = {};

  Object.entries(all).forEach(([key, message]) => {
    if (key === prefix || key.startsWith(`${prefix}.`)) {
      errors[key] = message;
    }
  });

  return errors;
}

export function getFieldError(errors, path) {
  return errors[path] || '';
}

export function sectionHasError(errors, prefix) {
  return Object.keys(errors).some((key) => key === prefix || key.startsWith(`${prefix}.`));
}
