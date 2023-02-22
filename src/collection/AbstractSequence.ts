import Iterable from './Iterable'

export default abstract class AbstractSequence<out A> extends Iterable<A> {
  [index: number]: A

  public static range(start: number, end: number, step = 1): AbstractSequence<number> {
    throw new Error()
  }

  protected constructor() {
    super()
    this.refresh()
  }

  public join(separator?: string): string {
    return Array.from(this).reduce((acc, e) => acc + e, '');
  }

  public abstract map<B>(f: (elem: A) => B): Iterable<B>

  protected refresh(): void {
    this.foreachIndexed((value, index) => {
      Object.defineProperty(this, index, {
        value,
        writable: false
      })
    })
  }

  public abstract reversed(): AbstractSequence<A>


}
