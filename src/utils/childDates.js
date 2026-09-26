function isoDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function childDateBounds(today = new Date()) {
  const oldest = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate() + 1);
  return { min: isoDate(oldest), max: isoDate(today) };
}

export function resizeChildDates(dates, count) {
  const next = Array.isArray(dates) ? dates.slice(0, count) : [];
  while (next.length < count) next.push('');
  return next;
}

export function isChildDateOfBirth(value, today = new Date()) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const { min, max } = childDateBounds(today);
  return value >= min && value <= max;
}
