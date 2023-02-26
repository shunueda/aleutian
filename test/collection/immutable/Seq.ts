// Importing necessary modules and classes
import { Seq } from '../../../src/index'
import { expect } from 'chai'

// Test suite for Seq class
describe('Seq', () => {
  // Test case for range method
  describe('#range()', () => {
    it('should return a sequence of numbers from start to end with the specified step', () => {
      const seq = Seq.range(1, 5, 2)
      expect(seq.toString()).to.equal('Seq(1, 3, 5)')
    })
  })

  // Test case for constructor and apply methods
  describe('#constructor() and #apply()', () => {
    it('should return the element at the specified index', () => {
      const seq = new Seq(['a', 'b', 'c', 'd'])
      expect(seq(2)).to.equal('c')
    })
  })

  // Test case for concat method
  describe('#concat()', () => {
    it('should return a new sequence with the elements of both sequences', () => {
      const seq1 = new Seq([1, 2, 3])
      const seq2 = new Seq([4, 5, 6])
      const seq3 = seq1.concat(seq2)
      expect(seq3.toString()).to.equal('Seq(1, 2, 3, 4, 5, 6)')
    })
  })

  // Test case for iterator method
  describe('#iterator()', () => {
    it('should return an iterator over the elements of the sequence', () => {
      const seq = new Seq([1, 2, 3])
      const iterator = seq.iterator()
      expect(iterator.next().value).to.equal(1)
      expect(iterator.next().value).to.equal(2)
      expect(iterator.next().value).to.equal(3)
      expect(iterator.next().done).to.be.true
    })
  })

  // Test case for map method
  describe('#map()', () => {
    it('should return a new sequence with the result of applying the function to each element', () => {
      const seq1 = new Seq([1, 2, 3])
      const seq2 = seq1.map(x => x * 2)
      expect(seq2.toString()).to.equal('Seq(2, 4, 6)')
    })
  })

  // Test case for reversed method
  describe('#reversed()', () => {
    it('should return a new sequence with the elements in reverse order', () => {
      const seq1 = new Seq([1, 2, 3])
      const seq2 = seq1.reversed()
      expect(seq2.toString()).to.equal('Seq(3, 2, 1)')
    })
  })

  // Test case for toString method
  describe('#toString()', () => {
    it('should return a string representation of the sequence', () => {
      const seq = new Seq(['a', 'b', 'c'])
      expect(seq.toString()).to.equal('Seq(a, b, c)')
    })
  })
})
