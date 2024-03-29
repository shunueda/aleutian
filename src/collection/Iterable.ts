/*
 * Created by Shun Ueda
 * Copyright (c) 2023 Shun Ueda
 * This code is licensed under the MIT License.
 * For details, see the LICENSE file at the root of this project.
 */

import Base from '../Base'
import { __INTERNAL__AbstractStaticMethodNotImplemented } from '../exception/Exceptions'

export default abstract class Iterable<out A, Args extends Array<unknown>, out Return> extends Base<Args, Return> {
  public static empty<A>(): Iterable<A, [unknown], unknown> {
    throw new __INTERNAL__AbstractStaticMethodNotImplemented()
  }

  public static from<A>(...elements: Array<A>): Iterable<A, [unknown], unknown> {
    throw new __INTERNAL__AbstractStaticMethodNotImplemented()
  }

  protected constructor() {
    super()
  }

  /**
   * @internal
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
   */
  public [Symbol.iterator](): IterableIterator<A> {
    return this.iterator()
  }

  public abstract concat(suffix: unknown): unknown

  public count(predicate: (elem: A) => boolean): number {
    return Array.from(this).filter(predicate).length
  }

  public foreach<B>(f: (elem: A) => B): void {
    Array.from(this).forEach(f)
  }

  public foreachIndexed<B>(f: (elem: A, index: number) => B): void {
    Array.from(this).forEach(f)
  }

  public *iterator(): IterableIterator<A> {
    yield* Array.from(this)
  }

  public abstract map(f: (elem: unknown) => unknown): unknown

  public size(): number {
    return Array.from(this).length
  }
}
