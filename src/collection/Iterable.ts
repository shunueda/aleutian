import { isNumeric } from '../util/isNumeric'
import { Base } from '../Base'

export default abstract class Iterable<A>
  extends Base
  implements Record<number, A>
{
  [index: number]: A

  public static empty<B>(): Iterable<B> {
    throw new Error()
  }

  public static from<A>(elements: Array<A>): Iterable<A> {
    throw new Error()
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

  public abstract map<B>(f: (elem: A) => B): Iterable<B>

  public size(): number {
    return Array.from(this).length
  }

  protected updateIndex(): void {
    Object.getOwnPropertyNames(this)
      .filter(isNumeric)
      .forEach(index => Reflect.deleteProperty(this, index))
    this.foreachIndexed((value, index) => {
      Object.defineProperty(this, index, {
        value,
        writable: false
      })
    })
  }
}
