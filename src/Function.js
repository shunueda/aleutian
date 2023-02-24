// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./Function.d.ts" />

export default function Function() {
  const func = this.constructor.prototype.apply
  const apply = function() {
    return func.apply(apply, arguments)
  }
  Object.setPrototypeOf(apply, this.constructor.prototype)
  Object.getOwnPropertyNames(func).forEach(p => Object.defineProperty(apply, p, Object.getOwnPropertyDescriptor(func, p)))
  return apply
}
Function.prototype = Object.create(Function.prototype)