type Func<Args extends Array<unknown>, Return> = (...argv: Args) => Return

interface IFunction extends Function {
  new <Args extends Array<unknown>, Return>(): Func<Args, Return>
}

declare const Function: IFunction
export default Function
