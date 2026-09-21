export const createInitialEnquiry = () => ({
  traveller: {
    fullName: '',
    email: '',
    whatsappCountryCode: '+44',
    whatsappNumber: '',
    groupType: '',
    adults: 2,
    children: 0,
    infants: 0,
    travelGangNotes: '',
  },
  trip: {
    destinationCertainty: '',
    destinations: '',
    departureDate: '',
    returnDate: '',
    dateFlexibility: '',
    flyFrom: '',
    flyFromOther: '',
    holidayTypes: [],
  },
  vibe: {
    pace: '',
    mustInclude: [],
    mustIncludeOther: '',
    wowFactor: '',
  },
  budget: {
    range: '',
    includes: [],
    accommodationTypes: [],
    accommodationPriorities: [],
  },
  importantBits: {
    specialRequirements: [],
    specialRequirementsOther: '',
    passportsReady: '',
    alreadyBooked: [],
    doNotWant: '',
  },
  personalTouch: {
    holidayPersonality: '',
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
    traveller: {
      ...formData.traveller,
      whatsapp: `${formData.traveller.whatsappCountryCode} ${formData.traveller.whatsappNumber}`.trim(),
      totalTravellers:
        Number(formData.traveller.adults || 0) +
        Number(formData.traveller.children || 0) +
        Number(formData.traveller.infants || 0),
    },
  };
}
