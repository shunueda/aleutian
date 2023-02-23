import Iterable from './Iterable'

export default abstract class AbstractSequence<out A> extends Iterable<A> {
  [index: number]: A

  public static range(
    start: number,
    end: number,
    step = 1
  ): AbstractSequence<number> {
    throw new Error()
  }

  protected constructor() {
    super()
  }

  public at(index: number): A {
    const v = Array.from(this).at(index)
    if (v) {
      return v
    } else {
      throw Error('IndexOutOfBounds')
    }
  }

  public join(separator?: string): string {
    return Array.from(this).reduce((acc, e) => acc + e, '')
  }

  public abstract map<B>(f: (elem: A) => B): Iterable<B>

  public abstract reversed(): AbstractSequence<A>
}
