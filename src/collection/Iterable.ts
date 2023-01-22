import { func0 } from '../util/functionTypes'

export default abstract class Iterable<T> {
  static from<T>(it: Iterable<T>): Iterable<T> {
    throw new Error()
  }
  static empty<T>(): Iterable<T> {
    throw new Error()
  }
  static range<T>(start: number, end: number, step = 1): Iterable<T> {
    throw new Error()
  }
  abstract concat(suffix: Iterable<T>): Iterable<T>

  abstract size(): number

  abstract toString(): string

  abstract count(predicate: (T) => boolean): number

  abstract reversed(): Iterable<T>

  abstract [Symbol.iterator](): Iterator<T>
}
