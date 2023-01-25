import Iterable from './Iterable'

export default abstract class AbstractSequence<A> extends Iterable<A> {
  public static range<A>(start: number, end: number, step = 1): Iterable<A> {
    throw new Error()
  }

  public abstract reversed(): AbstractSequence<A>
}
