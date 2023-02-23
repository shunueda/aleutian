// import { Seq } from '../src/index'
//
// const seq = new Seq([0, 1, 2, 3, 4, 5])
// const a = seq[0]
// console.log()

class A extends Function {
  private value: number;

  public constructor() {
    super();
    this.value = 0;
    return new Proxy(this, {
      apply: (target, thisArg, args) => {
        this.value += 1
        return this.value
      }
    });
  }
}

const a = new A()
const val = a()
console.log(val)
