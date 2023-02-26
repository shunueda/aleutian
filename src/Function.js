/*
 * Modified by Shun Ueda
 * Copyright (c) 2023 Shun Ueda
 * This code is licensed under the MIT License.
 * For details, see the LICENSE file at the root of this project.
 *
 * Original code by [Original Author] (https://github.com/CGamesPlay/node-callable-instance)
 * Copyright (c) 2016 Ryan Patterson
 * Licensed under the MIT License (https://opensource.org/licenses/MIT)
 */

/**
 * Returns an object that behaves like a function.
 * This function can be used to create a new function with the same behavior as
 * the original, but with a different name or context.
 *
 * @returns Callable object
 */
export default function Function() {
  const func = this.constructor.prototype.apply
  const apply = function () {
    return func.apply(apply, arguments)
  }
  Object.setPrototypeOf(apply, this.constructor.prototype)
  Object.defineProperties(apply, Object.getOwnPropertyDescriptors(func))
  this.prototype = Object.create(Function.prototype)
  return apply
}
