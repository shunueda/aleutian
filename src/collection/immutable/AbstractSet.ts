/*
 * Created by Shun Ueda
 * Copyright (c) 2023 Shun Ueda
 * This code is licensed under the MIT License.
 * For details, see the LICENSE file at the root of this project.
 */

import AbstractSequence from './AbstractSequence'

export default abstract class AbstractSet<out A> extends AbstractSequence<A> {
  protected readonly instance = new Set<A>([])
}
