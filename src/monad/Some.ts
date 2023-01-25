import { Option } from './Option'

export class Some<A> extends Option<A> {
  private readonly value: A

  public constructor(value: A) {
    super()
    this.value = value
  }
  public override toString(): string {
    return `${Option.name}.${Some.name}(${
      typeof this.value === 'string' ? `"${this.value}"` : this.value
    })`
  }
}
