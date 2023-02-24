import { Base } from '../Base'

export default abstract class Iterable<out A, Args extends Array<unknown>, Return> extends Base<Args, Return> {
  public static empty<A, Args extends Array<unknown>, Return>(): Iterable<A, Args, Return> {
    throw new Error()
  }

  public static from<A, Args extends Array<unknown>, Return>(...elements: Array<A>): Iterable<A, Args, Return> {
    throw new Error()
  }

  protected constructor() {
    super()
  }

  public [Symbol.iterator](): Iterator<A> {
    return this.iterator()
  }

  public abstract concat(suffix: Iterable<A, Args, Return>): Iterable<A, Args, Return>

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

  public abstract map<B>(f: (elem: A) => B): Iterable<B, Args, Return>

  public size(): number {
    return Array.from(this).length
  }
}
