import { identity } from '../util/predef'
import { Option } from './Option'
import Base from '../Base'
import { addDoubleQuoteIfString } from '../util/util'
import { Comonad } from '../Comonad'

export abstract class Either<out A, out B>
  extends Base
  implements Comonad<A, B>
{
  public static flatten<A, B>(nested: Either<A, Either<A, B>>): Either<A, B> {
    return nested.flatMap(identity)
  }

  public static Left<A>(value: A): Left<A> {
    return new Left(value)
  }

  public static Right<B>(value: B): Right<B> {
    return new Right(value)
  }

  public flatMap<C>(f: (right: B) => Either<A, C>): Either<A, C> {
    return this.fold(Either.Left, f)
  }

  public fold<C>(ifLeft: (left: A) => C, ifRight: (right: B) => C): C {
    return this.isRight
      ? ifRight((this as Either<A, B> as Right<B>).value)
      : ifLeft((this as Either<A, B> as Left<A>).value)
  }

  public getOrElse(fallback: (a: A) => B): B {
    return this.fold(fallback, identity)
  }

  public getOrNone(): Option<B> {
    return this.fold<Option<B>>(
      () => Option.None(),
      right => Option.Some(right)
    )
  }

  public abstract isLeft: boolean
  public abstract isRight: boolean

  public map<C>(f: (right: B) => C): Either<A, C> {
    return this.flatMap(right => Either.Right(f(right)))
  }

  public mapLeft<C>(f: (left: A) => C): Either<C, B> {
    return this.fold<Either<C, B>>(
      left => Either.Left(f(left)),
      right => Either.Right(right)
    )
  }

  public match<C>(cases: { left: (left: A) => C; right: (right: B) => C }): C {
    return this.fold(
      left => cases.left(left),
      right => cases.right(right)
    )
  }

  public onLeft(action: (left: A) => void): Either<A, B> {
    if (this.isLeft) {
      action((this as Either<A, B> as Left<A>).value)
    }
    return this
  }

  public onRight(action: (right: B) => void): Either<A, B> {
    if (this.isRight) {
      action((this as Either<A, B> as Right<B>).value)
    }
    return this
  }

  public swap(): Either<B, A> {
    return this.fold<Either<B, A>>(Either.Right, Either.Left)
  }

  public override toString(): string {
    return this.fold(
      left => `Either.Left(${addDoubleQuoteIfString(left)})`,
      right => `Either.Right(${addDoubleQuoteIfString(right)})`
    )
  }
}

export class Right<A> extends Either<never, A> {
  public isLeft = false
  public isRight = true

  public constructor(public readonly value: A) {
    super()
  }
}

export class Left<B> extends Either<B, never> {
  public isLeft = true
  public isRight = false

  public constructor(public readonly value: B) {
    super()
  }
}
