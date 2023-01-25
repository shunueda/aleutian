import { Option } from './Option'

export class None extends Option<never> {
  public override isEmpty(): boolean {
    return true
  }

  public override toString(): string {
    return `${Option.name}.${None.name}`
  }
}
