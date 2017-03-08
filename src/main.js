let _ = require('lodash');
"use strict";
function sum(arr) {
    return arr.reduce(function (a, b) {
        return a + b;
    }, 0);
}
function add(arr) {
    return _.sum(arr);
}
module.exports = {
    sum,
    add
};
