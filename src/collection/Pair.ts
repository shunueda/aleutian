/*
 * Created by Shun Ueda
 * Copyright (c) 2023 Shun Ueda
 * This code is licensed under the MIT License.
 * For details, see the LICENSE file at the root of this project.
 */

import Base from '../Base'
import { addDoubleQuoteIfString } from '../util/util'

export class Pair<A, B> extends Base<[0 | 1], A | B> {
  public constructor(public readonly first: A, public readonly second: B) {
    super()
  }

  public override apply(which: 0 | 1): A | B {
    return which ? this.first : this.second
  }

  public toString(): string {
    return `(${addDoubleQuoteIfString(this.first)}, ${addDoubleQuoteIfString(
      this.second
    )})`
  }

  public toTuple(): [A, B] {
    return [this.first, this.second]
  }
}
