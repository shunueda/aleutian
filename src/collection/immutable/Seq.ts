import AbstractSequence from './AbstractSequence'

export class Seq<out A> extends AbstractSequence<A> {
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

  public override concat(suffix: AbstractSequence<A>): Seq<A> {
    return new Seq([...this, ...suffix])
  }

  public* iterator(): Iterator<A> {
    yield* this.elements
  }

  public override map<B>(f: (elem: A) => B): Seq<B> {
    return new Seq<B>(this.elements.map(f))
  }

  public reversed(): Seq<A> {
    return new Seq<A>([...this.elements].reverse())
  }

  public override toString(): string {
    return `${Seq.name}(${this.elements.join(', ')})`
  }
}
