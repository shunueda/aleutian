import { Seq } from '../src'

const seq = new Seq<number>()
for (let i = 0; i < 10; i++) {
  seq[i] = i * 2
}

console.log(seq.asArray())
