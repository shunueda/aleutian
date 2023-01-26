export function addDoubleQuoteIfString(value: unknown) {
  return typeof value === 'string' ? `"${value}"` : value
}
