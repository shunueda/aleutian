import { Base } from '../Base'

export default abstract class Iterable<A> extends Base {
  public static empty<B>(): Iterable<B> {
    throw new Error()
  }

  public static from<A>(...elements: Array<A>): Iterable<A> {
    throw new Error()
  }

  protected constructor() {
    super()
    return new Proxy(this, {
      get: (
        target: Iterable<A>,
        prop: string | symbol,
        receiver: Iterable<A>
      ) => {
        if (prop in target) {
          return Reflect.get(target, prop, receiver)
        }
      }
    })
  }

  public [Symbol.iterator](): Iterator<A> {
    return this.iterator()
  }

  public abstract concat(suffix: Iterable<A>): Iterable<A>
  public count(predicate: (elem: A) => boolean): number {
    return Array.from(this).filter(predicate).length
  }
  public foreach<B>(f: (elem: A) => B): void {
    Array.from(this).forEach(elem => f(elem))
  }
  public foreachIndexed<B>(f: (elem: A, index: number) => B): void {
    Array.from(this).forEach((elem, i) => f(elem, i))
  }
  public abstract iterator(): Iterator<A>

  public size(): number {
    return Array.from(this).length
  }
}
