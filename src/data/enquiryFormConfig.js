export const COUNTRY_CODES = [
  { value: '+44', label: 'UK +44' },
  { value: '+91', label: 'IN +91' },
  { value: '+1', label: 'US/CA +1' },
  { value: '+353', label: 'IE +353' },
  { value: '+61', label: 'AU +61' },
  { value: '+971', label: 'AE +971' },
  { value: '+33', label: 'FR +33' },
  { value: '+49', label: 'DE +49' },
  { value: '+34', label: 'ES +34' },
  { value: '+39', label: 'IT +39' },
  { value: '+81', label: 'JP +81' },
  { value: '+65', label: 'SG +65' },
];

export const GROUP_TYPES = [
  { value: 'just_me', label: 'Just me', hint: 'Solo trip', icon: 'solo' },
  { value: 'couple', label: 'Couple getaway', hint: 'Two travellers', icon: 'couple' },
  { value: 'family', label: 'Family adventure', hint: 'Kids welcome', icon: 'family' },
  { value: 'friends', label: 'Friends trip', hint: 'Travel with friends', icon: 'friends' },
  { value: 'group', label: 'Group holiday', hint: 'Larger party', icon: 'group' },
  { value: 'something_special', label: 'Something special', hint: 'Tell us more below', icon: 'special' },
];

export const DESTINATION_CERTAINTY = [
  { value: 'decided', label: 'Yes, I know exactly where I want to go', icon: 'pin' },
  { value: 'ideas', label: 'I have a few ideas', icon: 'lightbulb' },
  { value: 'surprise', label: "Surprise me! I'm open to suggestions", icon: 'gift' },
];

export const DATE_FLEXIBILITY = [
  { value: 'very_flexible', label: 'Very flexible — find me the best deal', icon: 'tag' },
  { value: 'few_days', label: 'A few days either side is fine', icon: 'calendar' },
  { value: 'fixed', label: 'Fixed dates', icon: 'calendarCheck' },
];

export const YES_NO = [
  { value: 'yes', label: 'Yes', icon: 'check' },
  { value: 'no', label: 'No', icon: 'cross' },
];

export const HOLIDAY_TYPES = [
  { value: 'beach', label: 'Beach & Relaxation', icon: 'beach' },
  { value: 'culture', label: 'Culture & History', icon: 'culture' },
  { value: 'mountains', label: 'Mountains & Adventure', icon: 'mountains' },
  { value: 'food', label: 'Food & Experiences', icon: 'food' },
  { value: 'shopping', label: 'Shopping & City Life', icon: 'shopping' },
  { value: 'nature', label: 'Nature & Wildlife', icon: 'nature' },
  { value: 'romantic', label: 'Romantic Escape', icon: 'romantic' },
  { value: 'family_fun', label: 'Family Fun', icon: 'family' },
  { value: 'everything', label: 'A bit of everything!', icon: 'globe' },
];

export const HOLIDAY_PACE = [
  { value: 'slow', label: 'Slow & relaxed', icon: 'relax' },
  { value: 'mix', label: 'Some sightseeing + relaxation', icon: 'compass' },
  { value: 'packed', label: 'I want to see EVERYTHING!', icon: 'rocket' },
  { value: 'in_between', label: 'Somewhere in between', icon: 'halfday' },
];

export const MUST_INCLUDE = [
  { value: 'landmarks', label: 'Landmarks', icon: 'landmark' },
  { value: 'beaches', label: 'Beaches', icon: 'beach' },
  { value: 'museums', label: 'Museums', icon: 'art' },
  { value: 'shopping', label: 'Shopping', icon: 'shopping' },
  { value: 'adventure', label: 'Adventure', icon: 'adventure' },
  { value: 'food', label: 'Food & local experiences', icon: 'food' },
  { value: 'romantic', label: 'Romantic experiences', icon: 'romantic' },
  { value: 'nightlife', label: 'Nightlife', icon: 'nightlife' },
  { value: 'photography', label: 'Photography spots', icon: 'camera' },
  { value: 'other', label: 'Other', icon: 'sparkles' },
];

export const BUDGET_CURRENCIES = [
  { value: 'INR', label: 'INR ₹' },
  { value: 'GBP', label: 'GBP £' },
  { value: 'USD', label: 'USD $' },
  { value: 'EUR', label: 'EUR €' },
  { value: 'AED', label: 'AED' },
  { value: 'AUD', label: 'AUD A$' },
  { value: 'SGD', label: 'SGD S$' },
  { value: 'CAD', label: 'CAD C$' },
  { value: 'THB', label: 'THB ฿' },
  { value: 'LKR', label: 'LKR' },
];

export const BUDGET_INCLUDES = [
  { value: 'flights', label: 'Flights', icon: 'plane' },
  { value: 'accommodation', label: 'Accommodation', icon: 'hotel' },
  { value: 'airport_transfers', label: 'Airport transfers', icon: 'taxi' },
  { value: 'activities', label: 'Activities & excursions', icon: 'ticket' },
  { value: 'car_rental', label: 'Car rental', icon: 'car' },
  { value: 'travel_insurance', label: 'Travel insurance', icon: 'shield' },
  { value: 'everything', label: 'Everything from A to Z!', icon: 'globe' },
];

export const ACCOMMODATION_TYPES = [
  { value: 'budget', label: 'Budget-friendly', icon: 'piggy' },
  { value: 'three_star', label: '3-star comfort', icon: 'stars3' },
  { value: 'four_star', label: '4-star style', icon: 'stars4' },
  { value: 'five_star', label: '5-star luxury', icon: 'crown' },
  { value: 'boutique', label: 'Boutique hotels', icon: 'boutique' },
  { value: 'apartments', label: 'Apartments / villas', icon: 'villa' },
  { value: 'all_inclusive', label: 'All-inclusive resort', icon: 'resort' },
  { value: 'open', label: 'Open to suggestions', icon: 'lightbulb' },
];

export const ACCOMMODATION_PRIORITIES = [
  { value: 'location', label: 'Location', icon: 'pin' },
  { value: 'price', label: 'Price', icon: 'tag' },
  { value: 'views', label: 'Views', icon: 'views' },
  { value: 'breakfast', label: 'Breakfast included', icon: 'breakfast' },
  { value: 'pool', label: 'Swimming pool', icon: 'pool' },
  { value: 'family', label: 'Family-friendly', icon: 'family' },
  { value: 'luxury', label: 'Luxury & comfort', icon: 'diamond' },
  { value: 'quiet', label: 'Quiet & peaceful', icon: 'moon' },
];

export const SPECIAL_REQUIREMENTS = [
  { value: 'vegetarian', label: 'Vegetarian / Vegan food', icon: 'leaf' },
  { value: 'halal', label: 'Halal food', icon: 'halal' },
  { value: 'accessibility', label: 'Accessibility needs', icon: 'accessibility' },
  { value: 'elderly', label: 'Travelling with elderly', icon: 'elder' },
  { value: 'children', label: 'Travelling with children', icon: 'kid' },
  { value: 'dietary', label: 'Dietary restrictions', icon: 'apple' },
  { value: 'medical', label: 'Medical considerations', icon: 'medkit' },
  { value: 'visa', label: 'Visa assistance required', icon: 'visa' },
  { value: 'none', label: 'None', icon: 'check' },
  { value: 'other', label: 'Other', icon: 'sparkles' },
];

export const TRAVEL_CONFIRMATIONS = [
  {
    value: 'passports',
    label: 'All travelling members have passports valid for more than 6 months',
    icon: 'passport',
  },
  {
    value: 'insurance',
    label: 'Travel insurance for all travelling members is taken care of',
    icon: 'shield',
  },
];

export const ALREADY_BOOKED = [
  { value: 'nothing', label: 'Nothing yet', icon: 'hourglass' },
  { value: 'flights', label: 'Flights booked', icon: 'plane' },
  { value: 'accommodation', label: 'Accommodation booked', icon: 'hotel' },
  { value: 'activities', label: 'Some activities booked', icon: 'ticket' },
];

export const HOLIDAY_PERSONALITY = [
  { value: 'relaxed_luxury', label: 'Relaxed & luxurious', icon: 'resort' },
  { value: 'adventurous', label: 'Adventurous & exciting', icon: 'adventure' },
  { value: 'romantic', label: 'Romantic & dreamy', icon: 'romantic' },
  { value: 'family', label: 'Fun & family-friendly', icon: 'family' },
  { value: 'cultural', label: 'Cultural & meaningful', icon: 'culture' },
  { value: 'instagram', label: 'Instagram-worthy', icon: 'selfie' },
];

export const SPECIAL_OCCASIONS = [
  { value: 'birthday', label: 'Birthday', icon: 'cake' },
  { value: 'anniversary', label: 'Anniversary', icon: 'rings' },
  { value: 'honeymoon', label: 'Honeymoon', icon: 'cheers' },
  { value: 'graduation', label: 'Graduation', icon: 'graduation' },
  { value: 'reunion', label: 'Family reunion', icon: 'family' },
  { value: 'treat', label: 'Just because we deserve a holiday!', icon: 'party' },
];

export const SECTION_PREFIX = {
  traveller: 'traveller',
  destination: 'trip',
  vibe: 'vibe',
  budget: 'budget',
  important: 'importantBits',
  personal: 'personalTouch',
};

export const enquirySections = [
  {
    id: 'traveller',
    number: '1',
    title: 'Meet the Traveller',
    description: "Let's get to know you — no passport interrogation required.",
    scene: 'traveller',
    icon: 'solo',
    theme: { accent: '#ff6b4a', soft: '#fff1ec', deep: '#c2410c' },
    cheer: 'Your adventure begins!',
  },
  {
    id: 'destination',
    number: '2',
    title: 'Where Shall We Go?',
    kicker: 'The world is waiting',
    description: 'Where shall we send you?',
    scene: 'destination',
    icon: 'plane',
    theme: { accent: '#12b5b0', soft: '#e6f8f7', deep: '#0f766e' },
    cheer: 'The world is your oyster!',
  },
  {
    id: 'vibe',
    number: '3',
    title: 'Your Holiday Vibe',
    kicker: 'Dream. Explore. Repeat.',
    description: 'Tell us what makes your perfect trip.',
    scene: 'vibe',
    icon: 'camera',
    theme: { accent: '#e0457b', soft: '#fdeef4', deep: '#be185d' },
    cheer: 'Halfway to paradise!',
  },
  {
    id: 'budget',
    number: '4',
    title: "Let's Talk Money",
    kicker: 'Great trip, smart budget',
    description: "Don't worry, we won't judge your budget.",
    scene: 'budget',
    icon: 'coin',
    theme: { accent: '#1fa971', soft: '#e8f7ef', deep: '#047857' },
    cheer: 'Your trip is taking shape!',
  },
  {
    id: 'important',
    number: '5',
    title: 'The Important Bits',
    kicker: 'Better information, better trip',
    description: 'A few final details to make your trip smooth.',
    scene: 'important',
    icon: 'passport',
    theme: { accent: '#7b5cff', soft: '#f0edff', deep: '#5b21b6' },
    cheer: 'Almost there. Boarding soon!',
  },
  {
    id: 'personal',
    number: '6',
    title: 'Your Personal Touch',
    kicker: 'Different people. Different dreams. Same day.',
    description: 'Because every traveller is unique.',
    scene: 'personal',
    icon: 'romantic',
    theme: { accent: '#ff5c8a', soft: '#fff0f4', deep: '#be123c' },
    cheer: 'Last stop before take-off!',
  },
];
