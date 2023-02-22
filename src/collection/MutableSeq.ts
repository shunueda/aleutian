import { Seq } from './Seq'
import { isNumeric } from '../util/isNumeric'

export class MutableSeq<out A> extends Seq<A> {
  protected override refresh() {
    Object.getOwnPropertyNames(this)
      .filter(isNumeric)
      .forEach(index => Reflect.deleteProperty(this, index))
    super.refresh()
  }
}