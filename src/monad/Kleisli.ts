import { None, Option, Some } from './Option'
import { compose } from '../util/function'

// A: boolean => B: string
export class Kleisli<F, A, B> {
  public constructor(private f: (arg: A) => F) {}

  // public compose<Z>(reciprocal: Kleisli<F, Z, A>) {
  //   return new Kleisli<>()
  // }

  // Z: number => A: boolean
  public andThen<ZW, Z>(k: Kleisli<ZW, B, Z>) {
    return new Kleisli((arg: A) => {
      k.run()
    })
  }

  public run(arg: A): F {
    return this.f(arg)
  }
}
