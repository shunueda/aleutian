import Iterable from '../Iterable'

export default abstract class AbstractSequence<out A> extends Iterable<
  A,
  [number],
  A
> {
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
    return Array.from(this)[index] as A
  }

  public join(separator?: string): string {
    return Array.from(this).reduce((acc, e) => acc + e, '')
  }
  
  public abstract override map<B>(f: (elem: A) => B): AbstractSequence<B>
}
