import { buildEnquiryPayload } from '../data/enquiryDefaults';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function submitEnquiry(formData) {
  const payload = buildEnquiryPayload(formData);

  await delay(900);

  const reference = `RTR-${Date.now().toString().slice(-8)}`;
  const result = {
    ok: true,
    reference,
    message: 'Enquiry accepted (mock submission).',
    payload,
  };

  sessionStorage.setItem(
    'rtr:lastEnquiry',
    JSON.stringify({
      reference,
      submittedAt: payload.submittedAt,
      name: formData.traveller.fullName,
    }),
  );

  return result;
}

export function getLastEnquiry() {
  try {
    const raw = sessionStorage.getItem('rtr:lastEnquiry');
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
