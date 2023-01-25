import { Stringifiable } from '../util/Stringifiable'
import final from '../decorator/sealed'
import { Some } from './Some'
import { None } from './None'

@final
export class Option<A> extends Stringifiable {
  public static fromNullable<A>(value: A | null | undefined) {
    return value ? new Some(value) : new None()
  }
  public isEmpty(): boolean {
    return true
  }

  public toString(): string {
    return `${Option.name}`
  }
}
