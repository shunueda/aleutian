/*
 * Modified by Shun Ueda
 * Copyright (c) 2023 Shun Ueda
 * This code is licensed under the MIT License.
 * For details, see the LICENSE file at the root of this project.
 */

import AbstractMap from './AbstractMap'
import { Pair } from '../Pair'

export class Map<A, out B> extends AbstractMap<A, B> {
  public apply(args_0: A): B {
    throw new Error('Method not implemented.')
  }

  public concat(suffix: AbstractMap<A, B>): AbstractMap<A, B> {
    throw new Error('Method not implemented.')
  }

  public get(key: A): B {
    throw new Error('Method not implemented.')
  }

  public has(key: A): boolean {
    throw new Error('Method not implemented.')
  }

  public iterator(): Iterator<Pair<A, B>, any, undefined> {
    throw new Error('Method not implemented.')
  }

  public override map<C>(f: (elem: B) => C): Map<A, C> {
    return new Map<A, C>([])
  }

  public set(key: A, value: B): AbstractMap<A, B> {
    throw new Error('Method not implemented.')
  }

  public toString(): string {
    throw new Error('Method not implemented.')
  }
}
