/*
 * Created by Shun Ueda
 * Copyright (c) 2023 Shun Ueda
 * This code is licensed under the MIT License.
 * For details, see the LICENSE file at the root of this project.
 */

import util from 'node:util'
import Function from './Function'

/**
 * The `Base` class is used to create a base class for all callable classes.
 * @template Args The arguments of the function.
 * @template Return The return value of the function.
 */
export default abstract class Base<
  Args extends Array<unknown>,
  Return
> extends Function<Args, Return> {
  /**
   * @internal
   * Force custom inspect function to be used.
   * @returns The string representation of the class.
   * @see https://nodejs.org/api/util.html#util_util_inspect_custom
   */
  public [util.inspect.custom](): string {
    return this.toString()
  }

  /**
   * The `apply` method is used to call the function with the given arguments.
   * @param args
   * @returns The return value of the function.
   */
  public abstract override apply(...args: Args): Return

  /**
   * The `toString` method is used to get a string representation of the class.
   * @returns The string representation of the class.
   */
  public abstract override toString(): string
}
