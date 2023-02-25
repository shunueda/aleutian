// eslint-disable-next-line @typescript-eslint/triple-slash-reference

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
