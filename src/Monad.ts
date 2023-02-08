export interface Monad<A> {
  flatMap<B>(f: (a: A) => Monad<B>): Monad<B>
}
