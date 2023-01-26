import util from 'node:util'

export abstract class Stringifiable {
  public [util.inspect.custom]() {
    return this.toString()
  }

  public abstract toString(): string
}
