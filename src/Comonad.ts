export interface Comonad<A, B> {
  flatMap<C>(f: (right: B) => Comonad<A, C>): Comonad<A, C>
}
