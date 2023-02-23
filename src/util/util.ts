export function addDoubleQuoteIfString(value: unknown): string {
  return typeof value === 'string' ? `"${value}"` : String(value)
}

export function isNumeric(value: string): boolean {
  return /^-?\d+$/.test(value)
}
