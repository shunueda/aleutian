import { Stringifiable } from '../util/Stringifiable'
import { addDoubleQuoteIfString } from '../util/util'

export class Pair<A, B> extends Stringifiable {
  public constructor(public first: A, public second: B) {
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
