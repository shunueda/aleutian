import util from 'node:util'

export abstract class Base {
  public [util.inspect.custom]() {
    return this.toString()
  }

  public abstract toString(): string
}
