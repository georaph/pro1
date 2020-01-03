"use strict";
exports.__esModule = true;
//import { Observable } from 'rxjs/Observable';
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var rxjs_1 = require("rxjs");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('output');
    }, 1000);
});
var source = rxjs_1.Observable.fromPromise(promise);
source.subscribe(function (data) {
    console.log(data);
});
