import { Seq, Map } from '../src/index'
import Iterable from '../src/collection/Iterable'

const seq1 = new Seq([0, 1, 2, 3, 4, 5].map(e => e * 10))
const seq2 = new Seq([0, 1, 2, 3, 4, 5].map(e => e * 100))

const a = seq1.concat(seq2)
console.log(a)