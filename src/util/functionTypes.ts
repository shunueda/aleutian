/*
 * Created by Shun Ueda
 * Copyright (c) 2023 Shun Ueda
 * This code is licensed under the MIT License.
 * For details, see the LICENSE file at the root of this project.
 */

export type NulliFunction<A> = () => A
export type UniFunction<A, B> = (argv_1: A) => B
export type BiFunction<A, B, C> = (argv_1: A, argv_2: B) => C
