import Iterable from './Iterable'
import AbstractSequence from './AbstractSequence'

export class Seq<T> extends AbstractSequence<T> {
  public static override empty<T>(): Seq<T> {
    return new Seq<T>()
  }

  public static override from<T>(elements: T[]): Seq<T> {
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

  protected readonly elements: T[]

  public constructor(...elements: T[]) {
    super()
    this.elements = structuredClone(elements)
    this.updateIndex()
  }

  public concat(suffix: Iterable<T>): Seq<T> {
    return new Seq(...this.elements, ...suffix)
  }
  public *iterator(): Iterator<T> {
    for (const elem of this.elements) {
      yield elem
    }
  }

  public map<R>(f: (elem: T) => R): Seq<R> {
    return new Seq<R>(...this.elements.map(e => f(e)))
  }

  public reversed(): Seq<T> {
    return new Seq<T>(...[...this.elements].reverse())
  }

  public toString(): string {
    return `${Seq.name}(${this.elements.join(', ')})`
  }
}
