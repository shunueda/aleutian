import { Base } from '../Base'
import { addDoubleQuoteIfString } from '../util/util'

export class Pair<A, B> extends Base {
  public constructor(public readonly first: A, public readonly second: B) {
    super()
  }

  public override toString(): string {
    return `(${addDoubleQuoteIfString(this.first)}, ${addDoubleQuoteIfString(
      this.second
    )})`
  }

  public toTuple(): [A, B] {
    return [this.first, this.second]
  }
}
