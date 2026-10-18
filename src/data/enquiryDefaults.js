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
      heardAbout: {
        channel: '',
        otherDetail: '',
        referrer: {
          name: '',
          whatsappCountryCode: countryCode,
          whatsappNumber: '',
          email: '',
        },
      },
    },
  };
};

export function buildEnquiryPayload(formData) {
  const heardAbout = formData.personalTouch.heardAbout || {};
  const channel = heardAbout.channel || '';
  const referrer = heardAbout.referrer || {};

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
    personalTouch: {
      ...formData.personalTouch,
      heardAbout: {
        channel,
        otherDetail: channel === 'other' ? String(heardAbout.otherDetail || '').trim() : '',
        referrer:
          channel === 'referral'
            ? {
                ...referrer,
                name: String(referrer.name || '').trim(),
                email: String(referrer.email || '').trim(),
                whatsapp: `${referrer.whatsappCountryCode || ''} ${referrer.whatsappNumber || ''}`.trim(),
              }
            : null,
      },
    },
  };
}
