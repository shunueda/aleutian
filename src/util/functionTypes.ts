export type func0<TResult> = () => TResult
export type func1<T1, TResult> = (a: T1) => TResult
export type func2<T1, T2, TResult> = (a: T1, b: T2) => TResult
export type func3<T1, T2, T3, TResult> = (a: T1, b: T2, c: T3) => TResult
export type func4<T1, T2, T3, T4, TResult> = (
  a: T1,
  b: T2,
  c: T3,
  d: T4
) => TResult
export type func5<T1, T2, T3, T4, T5, TResult> = (
  a: T1,
  b: T2,
  d: T3,
  e: T4,
  f: T5
) => TResult
export type curried1<T1, TResult> = (a: T1) => TResult
export type curried2<T1, T2, TResult> = (a: T1) => (b: T2) => TResult
export type curried3<T1, T2, T3, TResult> = (
  a: T1
) => (b: T2) => (c: T3) => TResult
export type curried4<T1, T2, T3, T4, TResult> = (
  a: T1
) => (b: T2) => (c: T3) => (d: T4) => TResult
export type curried5<T1, T2, T3, T4, T5, TResult> = (
  a: T1
) => (b: T2) => (d: T3) => (e: T4) => (f: T5) => TResult
