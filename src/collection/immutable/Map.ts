/*
 * Created by Shun Ueda
 * Copyright (c) 2023 Shun Ueda
 * This code is licensed under the MIT License.
 * For details, see the LICENSE file at the root of this project.
 */

import AbstractMap from './AbstractMap'
import { NoSuchElementException } from '../../exception/Exceptions'

export class Map<A, out B> extends AbstractMap<A, B> {
  public static override empty<A extends [unknown, unknown]>(): Map<
    A[0],
    A[1]
  > {
    return new Map<A[0], A[1]>([])
  }

  public static override from<A extends [unknown, unknown]>(
    ...elements: Array<[A[0], A[1]]>
  ): Map<A[0], A[1]> {
    return new Map<A[0], A[1]>(elements)
  }

  public apply(key: A): B {
    return this.get(key)
  }

  public concat(suffix: AbstractMap<A, B>): AbstractMap<A, B> {
    for (const entry of suffix) {
      this.instance.set(entry[0], entry[1])
    }
    return this
  }

  public get(key: A): B {
    if (this.instance.has(key)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return this.instance.get(key)!
    } else {
      throw new NoSuchElementException('No such element')
    }
  }

  public has(key: A): boolean {
    return this.instance.has(key)
  }

  public *iterator(): IterableIterator<[A, B]> {
    yield* this.entries()
  }

  public override map<C>(f: (elem: B) => C): Map<A, C> {
    return new Map<A, C>(this.entries().map(([key, value]) => [key, f(value)]))
  }

  public set(key: A, value: B): AbstractMap<A, B> {
    this.instance.set(key, value)
    return this
  }
}
