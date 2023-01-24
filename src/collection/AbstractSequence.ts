import Iterable from './Iterable'

export default abstract class AbstractSequence<T> extends Iterable<T> {
  public abstract reversed(): AbstractSequence<T>
}
