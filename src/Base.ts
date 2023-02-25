import util from 'node:util'
import Function from './Function'

export default abstract class Base<
  Args extends Array<unknown>,
  Return
> extends Function<Args, Return> {
  public [util.inspect.custom](): string {
    return this.toString()
  }

  public abstract override apply(...args: Args): Return

  public abstract override toString(): string
}
