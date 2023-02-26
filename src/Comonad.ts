/*
 * Modified by Shun Ueda
 * Copyright (c) 2023 Shun Ueda
 * This code is licensed under the MIT License.
 * For details, see the LICENSE file at the root of this project.
 */

export interface Comonad<A, B> {
  flatMap<C>(f: (right: B) => Comonad<A, C>): Comonad<A, C>
}
