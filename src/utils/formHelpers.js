export function getByPath(object, path) {
  return path.split('.').reduce((value, key) => (value == null ? value : value[key]), object);
}

export function setByPath(object, path, nextValue) {
  const keys = path.split('.');
  const clone = structuredClone(object);
  let cursor = clone;

  keys.forEach((key, index) => {
    if (index === keys.length - 1) {
      cursor[key] = nextValue;
    } else {
      cursor = cursor[key];
    }
  });

  return clone;
}

export function toggleExclusive(list, value, exclusiveValues = []) {
  const isExclusive = exclusiveValues.includes(value);
  const alreadySelected = list.includes(value);

  if (alreadySelected) {
    return list.filter((item) => item !== value);
  }

  if (isExclusive) {
    return [value];
  }

  return [...list.filter((item) => !exclusiveValues.includes(item)), value];
}
