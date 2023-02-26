// /**
//  * eslint-disable  @typescript-eslint/no-explicit-any
//  *
//  * @format
//  */
//
// /* eslint-disable  @typescript-eslint/ban-types */
// export const _ = {}
//
// export function match<A>(expr: Object) {
//   return (...when: Array<[Function | typeof _, (value: any) => A]>) => {
//     for (const caseE of when) {
//       if (
//         caseE[0] === _ ||
//         (caseE[0] as Function).name == expr.constructor.name
//       ) {
//         return caseE[1](expr)
//       }
//     }
//     throw new Error()
//   }
// }
