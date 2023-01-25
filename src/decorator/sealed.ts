/* eslint-disable  @typescript-eslint/no-explicit-any */
export default function final(target: any): any {
  return class Final extends target {
    private constructor(...args: any[]) {
      if (new.target !== Final) {
        throw new Error(`Cannot extend a final class "${target.name}"`)
      }
      super(...args)
    }
  }
}
