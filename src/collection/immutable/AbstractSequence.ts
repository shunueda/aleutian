/*
 * Created by Shun Ueda
 * Copyright (c) 2023 Shun Ueda
 * This code is licensed under the MIT License.
 * For details, see the LICENSE file at the root of this project.
 */

import Iterable from '../Iterable'
import { Seq } from './Seq'

export default abstract class AbstractSequence<out A> extends Iterable<
  A,
  [number],
  A
> {
  public static range(
    start: number,
    end: number,
    step = 1
  ): AbstractSequence<number> {
    throw new Error()
  }

  protected constructor() {
    super()
  }

  public at(index: number): A {
    return Array.from(this)[index] as A
  }

  public join(separator?: string): string {
    return Array.from(this).join(separator)
  }

  public abstract override map<B>(f: (elem: A) => B): AbstractSequence<B>

  public abstract reversed(): AbstractSequence<A>
}
