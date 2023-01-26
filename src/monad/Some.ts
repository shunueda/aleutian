import { Option } from './Option'
import { addDoubleQuoteIfString } from '../util/util'

export class Some<A> extends Option<A> {
  public readonly value: A

  public constructor(value: A) {
    super()
    this.value = value
  }
  public override toString(): string {
    return `${Option.name}.${Some.name}(${addDoubleQuoteIfString(this.value)})`
  }
}
