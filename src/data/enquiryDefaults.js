export const createInitialEnquiry = () => ({
  traveller: {
    fullName: '',
    email: '',
    whatsappCountryCode: '+91',
    whatsappNumber: '',
    groupType: '',
    adults: 2,
    children: 0,
    childDatesOfBirth: [],
    travelGangNotes: '',
  },
  trip: {
    destinationCertainty: '',
    destinations: '',
    departureDate: '',
    returnDate: '',
    dateFlexibility: '',
    flyFrom: '',
    flexibleNearestAirport: '',
    holidayTypes: [],
  },
  vibe: {
    pace: '',
    mustInclude: [],
    mustIncludeOther: '',
    wowFactor: '',
  },
  budget: {
    amount: '',
    currency: 'INR',
    includes: [],
    accommodationTypes: [],
    accommodationPriorities: [],
  },
  importantBits: {
    specialRequirements: [],
    specialRequirementsOther: '',
    travelConfirmations: [],
    alreadyBooked: [],
    doNotWant: '',
  },
  personalTouch: {
    dreamExperience: '',
    specialOccasion: [],
    additionalNotes: '',
  },
});

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
