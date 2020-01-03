"use strict";
exports.__esModule = true;
// RxJS v6+
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
//emit a value every 2 seconds
var source = rxjs_1.interval(2);
var example = source.pipe(
//for demonstration, add 10 to and return as observable
operators_1.map(function (val) { return rxjs_1.of(val + 10); }), 
//merge values from inner observable
operators_1.concatAll());
//output: 'Example with Basic Observable 10', 'Example with Basic Observable 11'...
var subscribe = example.subscribe(function (val) {
    return console.log('Example with Basic Observable:', val);
});
