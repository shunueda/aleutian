import { UniFunction } from './functionTypes'

export function andThen<A, B, C>(f1: UniFunction<A, B>, f2: UniFunction<B, C>) {
  return (arg: A) => f2(f1(arg))
}

export function compose<A, B, C>(f1: UniFunction<B, C>, f2: UniFunction<A, B>) {
  return (arg: A) => f1(f2(arg))
}
