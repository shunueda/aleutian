import { AbstractMap } from './AbstractMap'
import { Seq } from './Seq'

export class Map<A, out B> extends AbstractMap<A, B> {
  public constructor(elements: Array<[A, B]>) {
    super()
    elements.forEach(([k, v]) => this.instance.set(k, v))
  }

  public apply(key: A): B {
    return this.instance.get(key)!
  }


  public concat(suffix: Map<A, B>): Map<A, B> {
    // suffix.foreach(([k, v]) => {
    //   this.instance.set(k, v)
    // })
    return suffix
  }

  public flatMap<C>(f: (k: A, v: B) => C): Seq<C> {
    // return new Seq(...[[...this.instance] as [A, B]].map(([k, v]) => f(k, v)))
    return new Seq<C>([])
  }

  public iterator(): Iterator<[A, B]> {
    return this.instance.entries()
  }

  public keys(): Array<A> {
    return [...this.instance.keys()]
  }

  public map<C>(f: (k: A, v: B) => C): Map<A, C> {
    return new Map(
      [...this.instance].map(([k, v]) => [k, f(k, v)]) as Array<[A, C]>
    )
  }

  protected refresh(): void {
    return
  }

  public override toString(): string {
    return `${Map.name}(${[...this.instance]
      .flatMap(([k, v]) => `${k} -> ${v}`)
      .join(', ')})`
  }

  public values(): Array<B> {
    return [...this.instance.values()]
  }
}
