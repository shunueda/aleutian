/*
 * Modified by Shun Ueda
 * Copyright (c) 2023 Shun Ueda
 * This code is licensed under the MIT License.
 * For details, see the LICENSE file at the root of this project.
 */

export function curry<A, R>(f: (a: A) => R): (a: A) => R {
  return (a: A) => f(a)
}

export function curry2<A, B, R>(f: (a: A, b: B) => R): (a: A) => (b: B) => R {
  return (a: A) => (b: B) => f(a, b)
}

export function curry3<A, B, C, R>(
  f: (a: A, b: B, c: C) => R
): (a: A) => (b: B) => (c: C) => R {
  return (a: A) => (b: B) => (c: C) => f(a, b, c)
}

export function curry4<A, B, C, D, R>(
  f: (a: A, b: B, c: C, d: D) => R
): (a: A) => (b: B) => (c: C) => (d: D) => R {
  return (a: A) => (b: B) => (c: C) => (d: D) => f(a, b, c, d)
}

export function curry5<A, B, C, D, E, R>(
  f: (a: A, b: B, c: C, d: D, e: E) => R
): (a: A) => (b: B) => (c: C) => (d: D) => (e: E) => R {
  return (a: A) => (b: B) => (c: C) => (d: D) => (e: E) => f(a, b, c, d, e)
}
