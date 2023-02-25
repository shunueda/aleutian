import AbstractSequence from './AbstractSequence'
import AbstractSet from './AbstractSet'

export class Set<out A> extends AbstractSet<A> {
  public static override range(
    start: number,
    end: number,
    step = 1
  ): Set<number> {
    return new Set(
      Array.from(
        { length: (end - start) / step + 1 },
        (_, index) => start + index * step
      )
    )
  }
  public constructor(elements: Array<A>) {
    super()
    elements.forEach(this.instance.add)
  }

  public override apply(index: number): A {
    return this.at(index)
  }

  public override concat(suffix: AbstractSequence<A>): Set<A> {
    return new Set([...this, ...suffix])
  }

  public* iterator(): Iterator<A> {
    return this.instance.values()
  }

  public override map<B>(f: (elem: A) => B): Set<B> {
    return new Set<B>([...this.instance.values()].map(f))
  }

  public reversed(): Set<A> {
    return new Set<A>([...this.instance.values()].reverse())
  }

  public override toString(): string {
    return `${Set.name}(${[...this.instance.values()].join(', ')})`
  }
}
