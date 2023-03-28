/*
 * Created by Shun Ueda
 * Copyright (c) 2023 Shun Ueda
 * This code is licensed under the MIT License.
 * For details, see the LICENSE file at the root of this project.
 */

import { UniFunction } from './functionTypes'

/**
 * The `andThen` function is used to compose two functions.
 * @param f1 The first function.
 * @param f2 The second function.
 * @returns The composed function.
 *
 * @example
 * const f1 = (x: number) => x + 1
 * const f2 = (x: number) => x * 2
 * const f3 = andThen(f1, f2) // f3(x) = f2(f1(x))
 * f3(1) // 4
 */
export function andThen<A, B, C>(f1: UniFunction<A, B>, f2: UniFunction<B, C>) {
  return (arg: A) => f2(f1(arg))
}

/**
 * The `compose` function is used to compose two functions.
 * @param f1 The first function.
 * @param f2 The second function.
 * @returns The composed function.
 *
 * @example
 * const f1 = (x: number) => x + 1
 * const f2 = (x: number) => x * 2
 * const f3 = compose(f1, f2) // f3(x) = f1(f2(x))
 * f3(1) // 3
 */
export function compose<A, B, C>(f1: UniFunction<B, C>, f2: UniFunction<A, B>) {
  return (arg: A) => f1(f2(arg))
}
