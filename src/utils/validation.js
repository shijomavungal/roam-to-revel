import { SECTION_PREFIX } from '../data/enquiryFormConfig';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9+\s()-]{7,18}$/;

function setError(errors, path, message) {
  errors[path] = message;
}

export function validateEnquiry(formData) {
  const errors = {};
  const { traveller, trip, vibe, budget, importantBits, personalTouch } = formData;

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
  const infants = Number(traveller.infants);

  if (!Number.isInteger(adults) || adults < 1) {
    setError(errors, 'traveller.adults', 'At least one adult (18+) is required.');
  }
  if (!Number.isInteger(children) || children < 0) {
    setError(errors, 'traveller.children', 'Children must be 0 or more.');
  }
  if (!Number.isInteger(infants) || infants < 0) {
    setError(errors, 'traveller.infants', 'Infants must be 0 or more.');
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
    setError(errors, 'trip.flyFrom', 'Please choose a preferred departure airport.');
  } else if (trip.flyFrom === 'other' && !trip.flyFromOther.trim()) {
    setError(errors, 'trip.flyFromOther', 'Please specify where you would like to fly from.');
  }

  if (vibe.mustInclude.includes('other') && !vibe.mustIncludeOther.trim()) {
    setError(errors, 'vibe.mustIncludeOther', 'Please tell us what else the holiday must include.');
  }

  if (!budget.range) {
    setError(errors, 'budget.range', 'Please select an approximate budget.');
  }

  if (!budget.includes.length) {
    setError(errors, 'budget.includes', 'Please tell us what the budget needs to include.');
  }

  if (!budget.accommodationTypes.length) {
    setError(errors, 'budget.accommodationTypes', 'Please choose at least one accommodation preference.');
  }

  if (!importantBits.specialRequirements.length) {
    setError(errors, 'importantBits.specialRequirements', 'Please select any special requirements, or choose None.');
  } else if (
    importantBits.specialRequirements.includes('other') &&
    !importantBits.specialRequirementsOther.trim()
  ) {
    setError(errors, 'importantBits.specialRequirementsOther', 'Please describe your other requirements.');
  }

  if (!importantBits.passportsReady) {
    setError(errors, 'importantBits.passportsReady', 'Please confirm passport / travel document status.');
  }

  if (!importantBits.alreadyBooked.length) {
    setError(errors, 'importantBits.alreadyBooked', 'Please tell us if you have already booked anything.');
  }

  if (!personalTouch.holidayPersonality) {
    setError(errors, 'personalTouch.holidayPersonality', 'Please choose a holiday personality.');
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
