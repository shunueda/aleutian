/*
 * Modified by Shun Ueda
 * Copyright (c) 2023 Shun Ueda
 * This code is licensed under the MIT License.
 * For details, see the LICENSE file at the root of this project.
 */

export interface Monad<A> {
  flatMap<B>(f: (a: A) => Monad<B>): Monad<B>
}
