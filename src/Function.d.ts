/*
 * Modified by Shun Ueda
 * Copyright (c) 2023 Shun Ueda
 * This code is licensed under the MIT License.
 * For details, see the LICENSE file at the root of this project.
 *
 * Original code by Ryan Patterson (https://github.com/CGamesPlay/node-callable-instance)
 * Copyright (c) 2016 Ryan Patterson
 * Licensed under the MIT License (https://opensource.org/licenses/MIT)
 */

type Func<Args extends Array<unknown>, Return> = (...argv: Args) => Return

interface IFunction extends Function {
  new <Args extends Array<unknown>, Return>(): Func<Args, Return>
}

declare const Function: IFunction
export default Function
