/*
 * Created by Shun Ueda
 * Copyright (c) 2023 Shun Ueda
 * This code is licensed under the MIT License.
 * For details, see the LICENSE file at the root of this project.
 */

import { Monad } from '../Monad'

export class Kleisli<A, B> {
  public constructor(private readonly f: (arg: A) => Monad<B>) {}

  public andThen<Z>(k: Kleisli<B, Z>): Kleisli<A, Z> {
    return new Kleisli<A, Z>((arg: A) => this.f(arg).flatMap(k.f))
  }

  public compose<Z>(k: Kleisli<Z, A>): Kleisli<Z, B> {
    return new Kleisli<Z, B>((arg: Z) => k.f(arg).flatMap(this.f))
  }

  public run(arg: A): Monad<B> {
    return this.f(arg)
  }
}
