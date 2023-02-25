import { Pair } from '../src/collection/Pair'
import { Seq } from '../src/index'

const pairs: Seq<Pair<number, string>> = new Seq(
  [
    new Pair(0, 'a'),
    new Pair(1, 'b'),
    new Pair(2, 'c'),
    new Pair(3, 'd'),
    new Pair(4, 'e'),
    new Pair(5, 'f')
  ]
)

pairs.foreach(({ first, second }) => {

})