import { Stringifiable } from '../util/Stringifiable'
import { Some } from './Some'
import { match } from '../util/match'

/**
 * @TODO
 * lift
 * zip
 *
 */
export abstract class Option<A> extends Stringifiable {
  public static catch<A>(
    recover: (throwable: Error) => Option<A>,
    f: () => A
  ): Option<A> {
    try {
      return new Some(f())
    } catch (t) {
      return recover(t as Error)
    }
  }

  public static fromNullable<A>(value: NullAble<A>) {
    return value ? new Some(value) : new None()
  }

  public static lift<A, B>(f: (a: A) => B): (option: Option<A>) => Option<B> {
    return option => option.map(f)
  }

  public catchOrNone<A>(f: () => A): Option<A> {
    return Option.catch(() => {
      throw new Error()
    }, f)
  }

  public flatMap<B>(f: (a: A) => Option<B>): Option<B> {
    return match<Option<B>>(this)(
      [None, (none: None) => none],
      [Some, (some: Some<A>) => f(some.value)]
    )
  }

  public fold<R>(ifEmpty: () => R, ifSome: (a: A) => R): R {
    return match<R>(this)(
      [None, ifEmpty],
      [Some, (some: Some<A>) => ifSome(some.value)]
    )
  }

  public abstract isEmpty(): boolean

  public isNotEmpty() {
    return !this.isEmpty()
  }

  public map<B>(f: (a: A) => B): Option<B> {
    return this.flatMap(a => new Some(f(a)))
  }

  public toString(): string {
    return `${Option.name}`
  }
}

export class None extends Option<never> {
  public override isEmpty(): boolean {
    return true
  }

  public override toString(): string {
    return `${Option.name}.${None.name}`
  }
}
