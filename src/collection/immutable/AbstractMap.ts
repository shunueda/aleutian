/*
 * Created by Shun Ueda
 * Copyright (c) 2023 Shun Ueda
 * This code is licensed under the MIT License.
 * For details, see the LICENSE file at the root of this project.
 */

import Iterable from '../Iterable'

export default abstract class AbstractMap<A, out B> extends Iterable<
  [A, B],
  [A],
  B
> {
  /**
   * @internal
   * The internal instance of Map.
   */
  protected readonly instance: Map<A, B> = new Map<A, B>()

  /**
   * @internal
   * The constructor of AbstractMap.
   * @param entries The entries of the map.
   */
  public constructor(entries: Array<[A, B]>) {
    super()
    this.instance = new Map<A, B>(entries)
  }

  /**
   * The iterator of the map.
   * @returns The iterator of the map.
   * @param suffix The suffix of the map.
   */
  public abstract override concat(suffix: AbstractMap<A, B>): AbstractMap<A, B>

  public entries(): Array<[A, B]> {
    return [...this.instance.entries()]
  }

  public abstract get(key: A): B

  public abstract has(key: A): boolean

  public abstract override map<C>(f: (elem: B) => C): AbstractMap<A, C>

  public abstract set(key: A, value: B): AbstractMap<A, B>

  public toString(): string {
    return `${this.name}(${this.entries()
      .map(([k, v]) => `${k} -> ${v}`)
      .join(', ')})`
  }
}
