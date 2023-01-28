import { Either } from '../src/monad/Either'

const a = 1 ? Either.Left('a') : Either.Right(1)

a.match({
  left: console.log,
  right: console.log
})
