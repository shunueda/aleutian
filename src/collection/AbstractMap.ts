import Iterable from './Iterable'

export abstract class AbstractMap<out A, out B> extends Iterable<[A, B]> {
  protected instance = new Map<A, B>()

  protected constructor(...elements: Array<[A, B]>) {
    super()
  }

  public abstract map<C>(f: (k: A, v: B) => C): AbstractMap<A, C>
}
