/*
 * Created by Shun Ueda
 * Copyright (c) 2023 Shun Ueda
 * This code is licensed under the MIT License.
 * For details, see the LICENSE file at the root of this project.
 */

export function addDoubleQuoteIfString(value: unknown): string {
  return typeof value === 'string' ? `"${value}"` : String(value)
}

export function isNumeric(value: string): boolean {
  return /^-?\d+$/.test(value)
}
