import { Option } from './Option'

export class Some<T> extends Option<T> {
  private value: T

  public constructor(value: T) {
    super()
    this.value = value
  }
}
