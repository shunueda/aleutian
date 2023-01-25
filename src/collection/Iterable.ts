import util from 'util'
import { isNumeric } from '../util/isNumeric'

export default abstract class Iterable<T> implements Record<number, T> {
  [index: number]: T

  public static empty<T>(): Iterable<T> {
    throw new Error()
  }

  public static from<T>(elements: T[]): Iterable<T> {
    throw new Error()
  }

  public [Symbol.iterator](): Iterator<T> {
    return this.iterator()
  }

  public [util.inspect.custom]() {
    return this.toString()
  }
  public abstract concat(suffix: Iterable<T>): Iterable<T>
  public count(predicate: (elem: T) => boolean): number {
    return Array.from(this).filter(predicate).length
  }
  public foreach<R>(f: (elem: T) => R): void {
    Array.from(this).forEach(elem => f(elem))
  }
  public foreachIndexed<R>(f: (elem: T, index: number) => R): void {
    Array.from(this).forEach((elem, i) => f(elem, i))
  }
  public abstract iterator(): Iterator<T>

  public abstract map<R>(f: (elem: T) => R): Iterable<R>

  public size(): number {
    return Array.from(this).length
  }

  public abstract toString(): string

  protected updateIndex(): void {
    Object.getOwnPropertyNames(this)
      .filter(isNumeric)
      .forEach(index => {
        Reflect.deleteProperty(this, index)
      })
    this.foreachIndexed((value, index) => {
      Object.defineProperty(this, index, {
        value,
        writable: false
      })
    })
  }
}
