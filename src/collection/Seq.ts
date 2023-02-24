import AbstractSequence from './AbstractSequence'
import Iterable from './Iterable'

export class Seq<A> extends AbstractSequence<A> {
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
  }

  public override apply(index: number): A {
    return this.at(index)
  }

  public asArray(): Array<A> {
    return this.elements
  }

  // public concat(suffix: Seq<A>): Seq<A> {
  //   return new Seq([...this.elements, ...Array.from(suffix)])
  // }

  public override concat(suffix: Seq<A>): Seq<A> {
    return new Seq([])
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

  public override toString(): string {
    return `${Seq.name}(${this.elements.join(', ')})`
  }
}