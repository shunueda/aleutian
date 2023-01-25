import { Seq } from '../src/collection/Seq'

const arr = [0, 1, 2]

function double(x: number) {
  return x * 2
}

Seq.from(arr).foreach(console.log)
