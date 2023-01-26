/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable  @typescript-eslint/ban-types */
export const _ = {}
export function match<A>(expr: Object) {
  return (...when: [Function | typeof _, (value: any) => A][]) => {
    for (const caseE of when) {
      if (
        caseE[0] === _ ||
        (caseE[0] as Function).name == expr.constructor.name
      ) {
        return caseE[1](expr) as A
      }
    }
    throw new Error()
  }
}
