import { Option } from './Option'

export class Some<T> extends Option<T> {
  value: T

  constructor(value: T) {
    super()
    this.value = value
  }
}
