'use strict';
var assert = require('assert');
var counter = require('../');

describe('array-counter node module', function () {
  it('must count correctly', function () {
    assert.equal(counter(["test", 1, 2, "test", "counter", [1,2,3]])['test'], 2);
    assert.equal(counter([1, 1, 2, {a:'b', c:'c'}])['1'], 2);
  });
});
