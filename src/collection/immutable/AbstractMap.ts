import Iterable from '../Iterable'
import { Pair } from '../Pair'

export default abstract class AbstractMap<A, out B> extends Iterable<Pair<A, B>, [A], B> {
  protected readonly instance: Map<A, B> = new Map<A, B>()

  public constructor(entries: Array<[A, B]>) {
    super()
    this.instance = new Map<A, B>(entries)
  }

  public entries(): Array<[A, B]> {
    return [...this.instance.entries()]
  }

  public abstract get(key: A): B

  public abstract has(key: A): boolean

  public abstract set(key: A, value: B): AbstractMap<A, B>
}
