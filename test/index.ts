import { Kleisli } from '../src/monad/Kleisli'
import { None, Option, Some } from '../src/monad/Option'

// const parse = new Kleisli<Option<number>, string, number>((s: string) =>
//   new RegExp('-?[0-9]+').test(s) ? new Some(parseInt(s)) : new None()
// )
const isTrue: Kleisli<Option<string>, boolean, string> = new Kleisli(
  (val: boolean) => (val ? Option.Some('YES') : Option.None())
)

const toString: Kleisli<Option<boolean>, number, boolean> = new Kleisli(
  (i: number) => (i < 10 ? Option.Some(true) : Option.None())
)

// number => O<boolean> => string
const parseAndToString = toString.andThen<Option<string>, string>(isTrue)

parseAndToString.run(1)
