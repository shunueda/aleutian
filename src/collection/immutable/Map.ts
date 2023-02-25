import AbstractMap from './AbstractMap'
import { Pair } from '../Pair'
import { Set } from './Set'
import { NoSuchElementException } from '../../exception/Exception'

export class Map<A, out B> extends AbstractMap<A, B> {
  public static override empty<A, B>(): Map<A, B> {
    return new Map<A, B>([])
  }

  public override apply(key: A): B {
    return this.get(key)
  }

  public override concat(suffix: AbstractMap<A, B>): Map<A, B> {
    const map = new Map<A, B>(this.entries())
    suffix.entries().forEach(([k, v]) => {
      map.set(k, v)
    })
    return map
  }

  public override get(key: A): B {
    if (this.instance.has(key)) {
      return this.instance.get(key) as B
    }
    throw new NoSuchElementException("")
  }

  public override has(key: A): boolean {
    return this.instance.has(key)
  }


  public override iterator(): Iterator<Pair<A, B>> {
    throw ''
  }

  public override map<C>(f: (elem: Pair<A, B>) => C): Map<A, C> {
    throw ''
  }

  public override set(key: A, value: B): void {
    throw ''
  }

  public override toString(): string {
    return ''
  }

}
