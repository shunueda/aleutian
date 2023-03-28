/*
 * Created by Shun Ueda
 * Copyright (c) 2023 Shun Ueda
 * This code is licensed under the MIT License.
 * For details, see the LICENSE file at the root of this project.
 */

import AbstractSequence from './AbstractSequence'

/**
 An immutable sequence of elements of type A.
 */
export class Seq<out A> extends AbstractSequence<A> {
  /**
   Creates a new Seq of numbers that starts at start and goes up to end (inclusive) with a specified step between each element.
   @param start - The starting number of the range.
   @param end - The ending number of the range.
   @param step - The step between each element in the range (default is 1).
   @returns A new Seq of numbers that starts at start and goes up to end (inclusive) with a specified step between each element.
   */
  public static override range(
    start: number,
    end: number,
    step = 1
  ): Seq<number> {
    return new Seq(
      Array.from(
        { length: (end - start) / step + 1 },
        (_, index) => start + index * step
      )
    )
  }

  public static override empty<A>(): Seq<A> {
    return new Seq([])
  }

  public static override from<A>(...elements: Array<A>): Seq<A> {
    return new Seq(elements)
  }

  /**
   * @internal
   Creates a new Seq with the given elements.
   @param elements - The elements of the new Seq.
   */
  public constructor(protected readonly elements: Array<A>) {
    super()
  }

  /**
   Returns the element at the given index.
   @param index - The index of the element to return.
   @returns The element at the given index.
   @throws An error if the index is out of bounds.
   */
  public override apply(index: number): A {
    return this.at(index)
  }

  /**
   Concatenates this Seq with the given suffix.
   @param suffix - The Seq to concatenate with this Seq.
   @returns A new Seq that contains all elements from this Seq followed by all elements from the suffix Seq.
   */
  public override concat(suffix: AbstractSequence<A>): Seq<A> {
    return new Seq([...this, ...suffix])
  }

  /**
   Returns an iterator that yields each element of this Seq.
   @returns An iterator that yields each element of this Seq.
   */
  public *iterator(): IterableIterator<A> {
    yield* this.elements
  }

  /**
   Returns a new Seq obtained by applying the given f function to each element of this Seq.
   @param f - The function to apply to each element of this Seq.
   @returns A new Seq obtained by applying the given f function to each element of this Seq.
   */
  public override map<B>(f: (elem: A) => B): Seq<B> {
    return new Seq<B>(this.elements.map(f))
  }

  /**
   Returns a new Seq that is the reverse of this Seq.
   @returns A new Seq that is the reverse of this Seq.
   */
  public reversed(): Seq<A> {
    return new Seq<A>([...this.elements].reverse())
  }

  /**
   Returns a string representation of this Seq.
   @returns A string representation of this Seq.
   */
  public override toString(): string {
    return `${Seq.name}(${this.elements.join(', ')})`
  }
}
