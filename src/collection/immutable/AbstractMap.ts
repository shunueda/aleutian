/*
 * Modified by Shun Ueda
 * Copyright (c) 2023 Shun Ueda
 * This code is licensed under the MIT License.
 * For details, see the LICENSE file at the root of this project.
 */

import Iterable from '../Iterable'
import { Pair } from '../Pair'

export default abstract class AbstractMap<A, out B> extends Iterable<
  Pair<A, B>,
  [A],
  B
> {
  protected readonly instance: Map<A, B> = new Map<A, B>()

  public constructor(entries: Array<[A, B]>) {
    super()
    this.instance = new Map<A, B>(entries)
  }

  public abstract override concat(suffix: AbstractMap<A, B>): AbstractMap<A, B>

  public abstract get(key: A): B

  public abstract has(key: A): boolean

  public abstract override map<C>(f: (elem: B) => C): AbstractMap<A, C>

  public abstract set(key: A, value: B): AbstractMap<A, B>
 }