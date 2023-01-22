import { Some } from './Some'
import { None } from './None'

export class Option<T> {
  static from<T>(value?: T): Option<T> {
    return value ? new Some(value) : new None()
  }
}
