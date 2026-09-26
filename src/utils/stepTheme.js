export function stepThemeStyle(theme) {
  if (!theme) return undefined;
  return {
    '--step-accent': theme.accent,
    '--step-soft': theme.soft,
    '--step-deep': theme.deep,
  };
}
