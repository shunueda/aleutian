import { Base } from '../Base'
import { addDoubleQuoteIfString } from '../util/util'
import { identity } from '../util/predef'
import { Monad } from '../Monad'

/**
 * @TODO
 * lift
 * zip
 */
export abstract class Option<out A> extends Base implements Monad<A> {
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

  public static fromNullable<A>(value: Nullable<A>) {
    return value ? new Some(value) : new None()
  }

  public static fromThrowable<A>(throwable: () => A) {
    try {
      return new Some(throwable())
    } catch (e) {
      return new None()
    }
  }

  public static lift<A, B>(f: (a: A) => B): (option: Option<A>) => Option<B> {
    return option => option.map(f)
  }

  public static None(): None {
    return new None()
  }

  public static Some<A>(some: A): Some<A> {
    return new Some(some)
  }

  public catchOrNone<A>(f: () => A): Option<A> {
    return Option.catch(() => {
      throw new Error()
    }, f)
  }

  public filter(predicate: (a: A) => boolean): Option<A> {
    return this.flatMap(a => (predicate(a) ? new Some(a) : new None()))
  }

  public filterNot(predicate: (a: A) => boolean): Option<A> {
    return this.flatMap(a => (!predicate(a) ? new Some(a) : new None()))
  }

  public flatMap<B>(f: (a: A) => Option<B>): Option<B> {
    return this.match({
      none: () => this as Option<A> as None,
      some: f
    })
  }

  public fold<C>(ifEmpty: () => C, ifSome: (a: A) => C): C {
    return this.isEmpty()
      ? ifEmpty()
      : ifSome((this as Option<A> as Some<A>).value)
  }

  public getOrElse(def: () => A): A {
    return this.fold(def, identity)
  }

  public abstract isEmpty(): boolean

  public isNotEmpty() {
    return !this.isEmpty()
  }

  public map<B>(f: (a: A) => B): Option<B> {
    return this.flatMap(a => new Some(f(a)))
  }

  public match<C>(cases: { some: (some: A) => C; none: () => C }): C {
    return this.fold(
      () => cases.none(),
      some => cases.some(some)
    )
  }

  public or(value: Option<A>): Option<A> {
    return this.isEmpty() ? value : this
  }

  public orElse(alternative: () => Option<A>): Option<A> {
    return this.isEmpty() ? alternative() : this
  }

  public toString(): string {
    return this.fold(
      () => `${Option.name}.${None.name}`,
      (value: A) =>
        `${Option.name}.${Some.name}(${addDoubleQuoteIfString(value)})`
    )
  }
}

export class Some<out A> extends Option<A> {
  public constructor(public readonly value: A) {
    super()
  }

  public isEmpty(): boolean {
    return false
  }
}

export class None extends Option<never> {
  public isEmpty(): boolean {
    return true
  }
}
