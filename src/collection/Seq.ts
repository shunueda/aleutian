import Iterable from './Iterable'
import AbstractSequence from './AbstractSequence'

export class Seq<A> extends AbstractSequence<A> {
  public static override empty<A>(): Seq<A> {
    return new Seq<A>([])
  }

  public static override from<A>(...elements: Array<A>): Seq<A> {
    return new Seq(elements)
  }

  public static override range(
    start: number,
    end: number,
    step = 1
  ): Seq<number> {
    return new Seq(
      Array.from(
        { length: (end - start) / step + 1 },
        (_, index) => start + index * step
      )
    )
  }

  public constructor(protected readonly elements: Array<A>) {
    super()
    this.refresh()
  }

  public asArray(): Array<A> {
    return this.elements
  }

  public concat(suffix: Iterable<A>): Seq<A> {
    return new Seq([...this.elements, ...suffix])
  }

  public* iterator(): Iterator<A> {
    for (const elem of this.elements) {
      yield elem
    }
  }

  public map<R>(f: (elem: A) => R): Seq<R> {
    return new Seq<R>(this.elements.map(e => f(e)))
  }

  public reversed(): Seq<A> {
    return new Seq<A>([...this.elements].reverse())
  }


  public toString(): string {
    return `${Seq.name}(${this.elements.join(', ')})`
  }
}
