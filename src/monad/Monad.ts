export interface Monad<A, Z> {
  flatMap<B, BW>(f: (a: A) => B): BW
}
