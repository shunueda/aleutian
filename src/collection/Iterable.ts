import util from 'util'

export default abstract class Iterable<T> {
  public static empty<T>(): Iterable<T> {
    throw new Error()
  }

  public static from<T>(elements: Iterable<T>): Iterable<T> {
    throw new Error()
  }

  public static range<T>(start: number, end: number, step = 1): Iterable<T> {
    throw new Error()
  }

  public abstract [Symbol.iterator](): Iterator<T>

  public [util.inspect.custom]() {
    return this.toString()
  }

  public abstract concat(suffix: Iterable<T>): Iterable<T>

  public abstract count(predicate: (elem: T) => boolean): number

  public abstract size(): number

  public abstract toString(): string
}
