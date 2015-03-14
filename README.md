#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

> counts unique elements of an array


## Install

```sh
$ npm install --save array-counter
```


## Usage

```js
var arrayCounter = require('array-counter');
var arr = ["foo", "bar", 10, 40, "foo", 10, "Hello World"];
arrayCounter(arr);
//> {
//    '10': 2,
//    '40': 1,
//    foo: 2,
//    bar: 1,
//    'Hello World': 1
// }
```


## License

MIT © [Mert Kahyaoğlu](http://mertkahyaoglu.github.io/)

[npm-image]: https://badge.fury.io/js/array-counter.svg
[npm-url]: https://npmjs.org/package/array-counter
[travis-image]: https://travis-ci.org/mertkahyaoglu/array-counter.svg?branch=master
[travis-url]: https://travis-ci.org/mertkahyaoglu/array-counter
