import AbstractSequence from './AbstractSequence'

export default abstract class AbstractSet<out A> extends AbstractSequence<A> {
  protected readonly instance = new Set<A>([])
}