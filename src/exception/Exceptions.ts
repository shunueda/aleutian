/*
 * Modified by Shun Ueda
 * Copyright (c) 2023 Shun Ueda
 * This code is licensed under the MIT License.
 * For details, see the LICENSE file at the root of this project.
 */

export class Exceptions extends Error {
  public constructor(message: string) {
    super(message)
  }
}

export class IndexOutOfBoundsException extends Exceptions {}

export class NoSuchElementException extends Exceptions {}
