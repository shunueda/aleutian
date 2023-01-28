export function addDoubleQuoteIfString(value: unknown): string {
  return typeof value === 'string' ? `"${value}"` : String(value)
}
