import { CURRENCY_BY_COUNTRY_CODE, DEFAULT_COUNTRY_CODE } from '../data/enquiryFormConfig';

const CANADIAN_TIME_ZONES = new Set([
  'America/Toronto',
  'America/Montreal',
  'America/Vancouver',
  'America/Edmonton',
  'America/Winnipeg',
  'America/Regina',
  'America/Swift_Current',
  'America/Halifax',
  'America/Glace_Bay',
  'America/Moncton',
  'America/Goose_Bay',
  'America/St_Johns',
  'America/Whitehorse',
  'America/Yellowknife',
  'America/Dawson_Creek',
  'America/Iqaluit',
]);

const US_TIME_ZONES = new Set([
  'America/New_York',
  'America/Detroit',
  'America/Chicago',
  'America/Denver',
  'America/Boise',
  'America/Phoenix',
  'America/Los_Angeles',
  'America/Anchorage',
  'Pacific/Honolulu',
]);

const US_TIME_ZONE_PREFIXES = ['America/Indiana/', 'America/Kentucky/', 'America/North_Dakota/'];

const COUNTRY_CODE_BY_TIME_ZONE = {
  'Europe/London': '+44',
  'Europe/Belfast': '+44',
  'Asia/Kolkata': '+91',
  'Asia/Calcutta': '+91',
  'Europe/Dublin': '+353',
  'Asia/Dubai': '+971',
  'Europe/Paris': '+33',
  'Europe/Berlin': '+49',
  'Europe/Busingen': '+49',
  'Europe/Madrid': '+34',
  'Africa/Ceuta': '+34',
  'Atlantic/Canary': '+34',
  'Europe/Rome': '+39',
  'Asia/Tokyo': '+81',
  'Asia/Singapore': '+65',
};

export function getTimeZone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || '';
  } catch {
    return '';
  }
}

export function countryCodeForTimeZone(timeZone) {
  if (COUNTRY_CODE_BY_TIME_ZONE[timeZone]) return COUNTRY_CODE_BY_TIME_ZONE[timeZone];
  if (timeZone.startsWith('Australia/')) return '+61';
  if (
    CANADIAN_TIME_ZONES.has(timeZone) ||
    US_TIME_ZONES.has(timeZone) ||
    US_TIME_ZONE_PREFIXES.some((prefix) => timeZone.startsWith(prefix))
  ) {
    return '+1';
  }
  return DEFAULT_COUNTRY_CODE;
}

export function currencyForCountryCode(countryCode, timeZone = getTimeZone()) {
  if (countryCode === '+1' && CANADIAN_TIME_ZONES.has(timeZone)) return 'CAD';
  return CURRENCY_BY_COUNTRY_CODE[countryCode] || CURRENCY_BY_COUNTRY_CODE[DEFAULT_COUNTRY_CODE];
}

export function detectLocaleDefaults() {
  const timeZone = getTimeZone();
  const countryCode = countryCodeForTimeZone(timeZone);
  return { countryCode, currency: currencyForCountryCode(countryCode, timeZone) };
}
