import util from 'node:util'

export abstract class Base extends Function {
  public [util.inspect.custom]() {
    return this.toString()
  }

  public abstract override toString(): string
}
