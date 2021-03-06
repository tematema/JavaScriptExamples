var mocha = require('mocha')
var suite = mocha.suite
var test = mocha.test
var assert = require('assert')

var List = require('../../../src/collections/list-naive').List
var max = require('../../../src/coursera/progfun1/example').max
var intNotZero = require('../../../src/coursera/progfun1/example').intNotZero
var sum = require('../../../src/coursera/progfun1/example').sum


suite('ListsSuite', function() {

  // Intro

  test('one plus one is two', function() {
    assert(1 + 1 === 2)
  })

  test('one plus one is three?', function() {
    assert(1 + 1 !== 3)
  })

  test('sum of a few numbers', function() {
    assert.equal(14, sum(List(5, 3, 6)))
  })

  test('intNotZero throws an exception if its argument is 0', function() {
    function block() { intNotZero(0) }
    assert.throws(block, Error)
  })

  // Lists

  // sum

  test('sum of a few numbers', function() {
    assert(sum(List(1, 2, 0)) === 3)
  })

  test('sum of zeroes', function() {
    assert(sum(List(0, 0, 0)) === 0)
  })

  test('sum of negative', function() {
    assert(sum(List(-5, 5, 2)) === 2)
  })

  test('sum of none', function() {
    assert(sum(List()) === 0)
  })

  test('sum of ones', function() {
    assert(sum(List(1, 1, 1)) === 3)
  })

  // max

  test('max of a few numbers', function() {
    assert(max(List(3, 7, 2)) === 7)
  })

  test('max of empty list exception', function() {
    function block() { max(List()) }
    assert.throws(block, Error)
  })

  test('max of zeroes', function() {
    assert(max(List(0, 0, 0)) === 0)
  })

  test('max of negative', function() {
    assert(max(List(-1, 5, 0)) === 5)
  })

  test('max of ones', function() {
    assert(max(List(1, 1, 1)) === 1)
  })

})
