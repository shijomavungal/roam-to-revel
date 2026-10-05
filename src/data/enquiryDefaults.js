import { detectLocaleDefaults } from '../utils/locale';

export const createInitialEnquiry = () => {
  const { countryCode, currency } = detectLocaleDefaults();

  return {
    traveller: {
      fullName: '',
      email: '',
      whatsappCountryCode: countryCode,
      whatsappNumber: '',
      groupType: '',
      adults: 2,
      children: 0,
      childDatesOfBirth: [],
    },
    trip: {
      destinationCertainty: '',
      destinations: '',
      departureDate: '',
      returnDate: '',
      dateFlexibility: '',
      flyFrom: '',
      flexibleNearestAirport: '',
    },
    budget: {
      amount: '',
      currency,
      includes: [],
      accommodationTypes: [],
      accommodationPriorities: [],
    },
    importantBits: {
      specialRequirements: [],
      specialRequirementsOther: '',
      travelConfirmations: [],
      alreadyBooked: [],
    },
    personalTouch: {
      holidayVibes: [],
      dreamExperience: '',
      specialOccasion: [],
      birthdayDate: '',
      anniversaryDate: '',
      additionalNotes: '',
    },
  };
};

export function buildEnquiryPayload(formData) {
  return {
    source: 'public_enquiry_form',
    submittedAt: new Date().toISOString(),
    ...formData,
    trip: {
      ...formData.trip,
      destinations:
        formData.trip.destinationCertainty === 'surprise' ? '' : formData.trip.destinations,
    },
    traveller: {
      ...formData.traveller,
      whatsapp: `${formData.traveller.whatsappCountryCode} ${formData.traveller.whatsappNumber}`.trim(),
      totalTravellers: Number(formData.traveller.adults || 0) + Number(formData.traveller.children || 0),
    },
  };
}
