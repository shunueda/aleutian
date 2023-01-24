import Iterable from './Iterable'
import AbstractSequence from './AbstractSequence'

export class Seq<T> extends AbstractSequence<T> {
  public static override empty<T>(): Seq<T> {
    return new Seq<T>()
  }

  public static override from<T>(elements: AbstractSequence<T>): Seq<T> {
    return new Seq(...elements)
  }

  public static override range<T>(
    start: number,
    end: number,
    step = 1
  ): Iterable<T> {
    throw new Seq(
      ...Array.from(
        { length: (end - start) / step + 1 },
        (_, index) => start + index * step
      )
    )
  }

  private readonly elements: T[] = []

  public constructor(...elements: T[]) {
    super()
    this.elements.push(...elements)
  }

  public *[Symbol.iterator](): Iterator<T> {
    for (const elem of this.elements) {
      yield elem
    }
  }

  public concat(suffix: Iterable<T>): Iterable<T> {
    return new Seq(...this.elements, ...suffix)
  }

  public count(predicate: (elem: T) => boolean): number {
    return this.elements.filter(predicate).length
  }

  public reversed(): Seq<T> {
    return new Seq<T>(...[...this.elements].reverse())
  }

  public size(): number {
    return this.elements.length
  }

  public toString(): string {
    return `${Seq.name}(${this.elements.join(', ')})`
  }
}
