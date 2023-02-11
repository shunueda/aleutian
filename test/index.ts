import { Kleisli } from '../src/monad/Kleisli'
import { None, Some } from '../src/monad/Option'
import util from 'node:util'

const parse = new Kleisli((s: string) =>
  new RegExp('-?[0-9]+').test(s) ? new Some(parseInt(s)) : new None()
)

const reciprocal = new Kleisli((i: number) =>
  i != 0 ? new Some(1.0 / i) : new None()
)

console.log(reciprocal.compose(parse).run('1'))
