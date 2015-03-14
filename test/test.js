'use strict';
var assert = require('assert');
var counter = require('../');

describe('array-counter node module', function () {
  it('must have at least one test', function () {
    assert.equal(counter(["test", 1, 2, "test", "counter", [1,2,3]])['test'], 2);
    var arr = ["foo", "bar", 10, 40, "foo", 10, "Hello World"];
    console.log(counter(arr));
  });
});
