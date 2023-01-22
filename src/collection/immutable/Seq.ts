import Iterable from '../Iterable'

export class Seq<T> extends Iterable<T> {
  toString(): string {
    throw new Error('Method not implemented.')
  }
  [Symbol.iterator](): Iterator<T> {
    return undefined
  }

  concat(suffix: Iterable<T>): Iterable<T> {
    return undefined
  }

  count(predicate: (T) => boolean): number {
    return 0
  }

  reversed(): Iterable<T> {
    return undefined
  }

  size(): number {
    return 0
  }
}
