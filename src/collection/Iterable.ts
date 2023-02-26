/*
 * Modified by Shun Ueda
 * Copyright (c) 2023 Shun Ueda
 * This code is licensed under the MIT License.
 * For details, see the LICENSE file at the root of this project.
 */

import Base from '../Base'

export default abstract class Iterable<
  out A,
  Args extends Array<unknown>,
  out Return
> extends Base<Args, Return> {
  public static empty<A, Args extends Array<unknown>, Return>(): Iterable<
    A,
    Args,
    Return
  > {
    throw new Error()
  }

  public static from<A, Args extends Array<unknown>, Return>(
    ...elements: Array<A>
  ): Iterable<A, Args, Return> {
    throw new Error()
  }

  protected constructor() {
    super()
  }

  public [Symbol.iterator](): Iterator<A> {
    return this.iterator()
  }

  public abstract concat(suffix: unknown): unknown

  public count(predicate: (elem: A) => boolean): number {
    return Array.from(this).filter(predicate).length
  }

  public foreach<B>(f: (elem: A) => B): void {
    Array.from(this).forEach(elem => f(elem))
  }

  public foreachIndexed<B>(f: (elem: A, index: number) => B): void {
    Array.from(this).forEach((elem, i) => f(elem, i))
  }

  public abstract iterator(): Iterator<A>

  public abstract map(f: (elem: unknown) => unknown): unknown

  public size(): number {
    return Array.from(this).length
  }
}
