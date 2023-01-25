import Iterable from './Iterable'

export default abstract class AbstractSequence<T> extends Iterable<T> {
  public static range<T>(start: number, end: number, step = 1): Iterable<T> {
    throw new Error()
  }

  public abstract reversed(): AbstractSequence<T>
}
