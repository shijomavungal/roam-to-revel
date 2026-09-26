export const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export function parseISO(value) {
  const [year, month, day] = value.split('-').map(Number);
  return new Date(year, month - 1, day);
}

export function formatISO(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function todayISO() {
  return formatISO(new Date());
}

export function formatDisplay(value) {
  if (!value) return '';
  return parseISO(value).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export function monthLabel(year, month) {
  return new Date(year, month, 1).toLocaleDateString('en-GB', {
    month: 'long',
    year: 'numeric',
  });
}

export function shiftMonth(year, month, amount) {
  const next = new Date(year, month + amount, 1);
  return { year: next.getFullYear(), month: next.getMonth() };
}

export function addDays(iso, amount) {
  const date = parseISO(iso);
  date.setDate(date.getDate() + amount);
  return formatISO(date);
}

export function monthCells(year, month) {
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];

  for (let index = 0; index < firstWeekday; index += 1) {
    const date = new Date(year, month, index - firstWeekday + 1);
    cells.push({ iso: formatISO(date), outside: true });
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push({ iso: formatISO(new Date(year, month, day)), outside: false });
  }

  let trail = 1;
  while (cells.length % 7 !== 0) {
    cells.push({ iso: formatISO(new Date(year, month + 1, trail)), outside: true });
    trail += 1;
  }

  return cells;
}

export function ageLabel(iso, today = new Date()) {
  if (!iso) return '';
  const born = parseISO(iso);
  let months = (today.getFullYear() - born.getFullYear()) * 12 + (today.getMonth() - born.getMonth());
  if (today.getDate() < born.getDate()) months -= 1;
  if (months < 1) return 'Newborn';
  if (months < 24) return `${months} month${months === 1 ? '' : 's'} old`;
  const years = Math.floor(months / 12);
  return `${years} years old`;
}
