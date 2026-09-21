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
  { value: 'decided', label: 'Yes, I know exactly where I want to go' },
  { value: 'ideas', label: 'I have a few ideas' },
  { value: 'surprise', label: "Surprise me! I'm open to suggestions" },
];

export const DATE_FLEXIBILITY = [
  { value: 'very_flexible', label: 'Very flexible — find me the best deal' },
  { value: 'few_days', label: 'A few days either side is fine' },
  { value: 'fixed', label: 'Fixed dates' },
];

export const FLY_FROM = [
  { value: 'edinburgh', label: 'Edinburgh' },
  { value: 'glasgow', label: 'Glasgow' },
  { value: 'manchester', label: 'Manchester' },
  { value: 'london', label: 'London' },
  { value: 'other', label: 'Other' },
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
  { value: 'everything', label: 'A bit of everything!', icon: 'everything' },
];

export const HOLIDAY_PACE = [
  { value: 'slow', label: 'Slow & relaxed' },
  { value: 'mix', label: 'Some sightseeing + relaxation' },
  { value: 'packed', label: 'I want to see EVERYTHING!' },
  { value: 'in_between', label: 'Somewhere in between' },
];

export const MUST_INCLUDE = [
  { value: 'landmarks', label: 'Landmarks' },
  { value: 'beaches', label: 'Beaches' },
  { value: 'museums', label: 'Museums' },
  { value: 'shopping', label: 'Shopping' },
  { value: 'adventure', label: 'Adventure' },
  { value: 'food', label: 'Food & local experiences' },
  { value: 'romantic', label: 'Romantic experiences' },
  { value: 'nightlife', label: 'Nightlife' },
  { value: 'photography', label: 'Photography spots' },
  { value: 'other', label: 'Other' },
];

export const BUDGET_RANGES = [
  { value: 'under_1000', label: 'Under £1,000' },
  { value: '1000_2000', label: '£1,000 – £2,000' },
  { value: '2000_3500', label: '£2,000 – £3,500' },
  { value: '3500_5000', label: '£3,500 – £5,000' },
  { value: '5000_plus', label: '£5,000+' },
  { value: 'unsure', label: "I'm not sure yet — help me work it out!" },
];

export const BUDGET_INCLUDES = [
  { value: 'flights', label: 'Flights' },
  { value: 'accommodation', label: 'Accommodation' },
  { value: 'airport_transfers', label: 'Airport transfers' },
  { value: 'activities', label: 'Activities & excursions' },
  { value: 'car_rental', label: 'Car rental' },
  { value: 'travel_insurance', label: 'Travel insurance' },
  { value: 'everything', label: 'Everything from A to Z!' },
];

export const ACCOMMODATION_TYPES = [
  { value: 'budget', label: 'Budget-friendly' },
  { value: 'three_star', label: '3-star comfort' },
  { value: 'four_star', label: '4-star style' },
  { value: 'five_star', label: '5-star luxury' },
  { value: 'boutique', label: 'Boutique hotels' },
  { value: 'apartments', label: 'Apartments / villas' },
  { value: 'all_inclusive', label: 'All-inclusive resort' },
  { value: 'open', label: 'Open to suggestions' },
];

export const ACCOMMODATION_PRIORITIES = [
  { value: 'location', label: 'Location' },
  { value: 'price', label: 'Price' },
  { value: 'views', label: 'Views' },
  { value: 'breakfast', label: 'Breakfast included' },
  { value: 'pool', label: 'Swimming pool' },
  { value: 'family', label: 'Family-friendly' },
  { value: 'luxury', label: 'Luxury & comfort' },
  { value: 'quiet', label: 'Quiet & peaceful' },
];

export const SPECIAL_REQUIREMENTS = [
  { value: 'vegetarian', label: 'Vegetarian / Vegan food' },
  { value: 'halal', label: 'Halal food' },
  { value: 'accessibility', label: 'Accessibility needs' },
  { value: 'elderly', label: 'Travelling with elderly' },
  { value: 'children', label: 'Travelling with children' },
  { value: 'dietary', label: 'Dietary restrictions' },
  { value: 'medical', label: 'Medical considerations' },
  { value: 'visa', label: 'Visa assistance required' },
  { value: 'none', label: 'None' },
  { value: 'other', label: 'Other' },
];

export const PASSPORT_STATUS = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
  { value: 'renewing', label: 'Some are being renewed' },
];

export const ALREADY_BOOKED = [
  { value: 'nothing', label: 'Nothing yet' },
  { value: 'flights', label: 'Flights booked' },
  { value: 'accommodation', label: 'Accommodation booked' },
  { value: 'activities', label: 'Some activities booked' },
];

export const HOLIDAY_PERSONALITY = [
  { value: 'relaxed_luxury', label: 'Relaxed & luxurious' },
  { value: 'adventurous', label: 'Adventurous & exciting' },
  { value: 'romantic', label: 'Romantic & dreamy' },
  { value: 'family', label: 'Fun & family-friendly' },
  { value: 'cultural', label: 'Cultural & meaningful' },
  { value: 'instagram', label: 'Instagram-worthy' },
];

export const SPECIAL_OCCASIONS = [
  { value: 'birthday', label: 'Birthday' },
  { value: 'anniversary', label: 'Anniversary' },
  { value: 'honeymoon', label: 'Honeymoon' },
  { value: 'graduation', label: 'Graduation' },
  { value: 'reunion', label: 'Family reunion' },
  { value: 'treat', label: 'Just because we deserve a holiday!' },
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
    kicker: 'Hello, adventurer',
    description: "Let's get to know you — no passport interrogation required.",
    scene: 'traveller',
    icon: 'solo',
  },
  {
    id: 'destination',
    number: '2',
    title: 'Where Shall We Go?',
    kicker: 'The world is waiting',
    description: 'Where shall we send you?',
    scene: 'destination',
    icon: 'plane',
  },
  {
    id: 'vibe',
    number: '3',
    title: 'Your Holiday Vibe',
    kicker: 'Dream. Explore. Repeat.',
    description: 'Tell us what makes your perfect trip.',
    scene: 'vibe',
    icon: 'camera',
  },
  {
    id: 'budget',
    number: '4',
    title: "Let's Talk Money",
    kicker: 'Great trip, smart budget',
    description: "Don't worry, we won't judge your budget.",
    scene: 'budget',
    icon: 'coin',
  },
  {
    id: 'important',
    number: '5',
    title: 'The Important Bits',
    kicker: 'Better information, better trip',
    description: 'A few final details to make your trip smooth.',
    scene: 'important',
    icon: 'passport',
  },
  {
    id: 'personal',
    number: '6',
    title: 'Your Personal Touch',
    kicker: 'Different people. Different dreams. Same day.',
    description: 'Because every traveller is unique.',
    scene: 'personal',
    icon: 'romantic',
  },
  {
    id: 'destination',
    number: '2',
    title: 'Where Shall We Go?',
    kicker: 'The world is waiting',
    description: 'Where shall we send you?',
    scene: 'destination',
  },
  {
    id: 'vibe',
    number: '3',
    title: 'Your Holiday Vibe',
    kicker: 'Dream. Explore. Repeat.',
    description: 'Tell us what makes your perfect trip.',
    scene: 'vibe',
  },
  {
    id: 'budget',
    number: '4',
    title: "Let's Talk Money",
    kicker: 'Great trip, smart budget',
    description: "Don't worry, we won't judge your budget.",
    scene: 'budget',
  },
  {
    id: 'important',
    number: '5',
    title: 'The Important Bits',
    kicker: 'Better information, better trip',
    description: 'A few final details to make your trip smooth.',
    scene: 'important',
  },
  {
    id: 'personal',
    number: '6',
    title: 'Your Personal Touch',
    kicker: 'Different people. Different dreams. Same day.',
    description: 'Because every traveller is unique.',
    scene: 'personal',
  },
];
