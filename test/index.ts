import { Some } from '../src/monad/Some'
import { _, match } from '../src/util/match'
import { None, Option } from '../src/monad/Option'

const option = Option.fromNullable<number>(null)
