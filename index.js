'use strict';

function isArray(obj) {
  return Object.prototype.toString.call(obj) === "[object Array]";
}

module.exports = function (arr) {
  if(!isArray(arr)) {
    throw new TypeError('Expected an array.');
  }

  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    if(arr[i] in obj) {
      obj[arr[i]]++;
    }else {
      obj[arr[i]] = 1;
    }
  }

  return obj;
};
