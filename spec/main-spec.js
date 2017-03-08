"use strict";
let {
    sum,
    add
} = require('../src/main.js');
describe("A suite is just a function", function () {
    it("and so is a spec", function () {
        let arr = [1, 2, 3];
        let result = sum(arr);
        let expected = 6;
        expect(result).toEqual(expected);
    });
    it("sum ", function () {
        let arr = [1, 2, 3, 4, 5, 6];
        let result = add(arr);
        let expected = 21;
        expect(result).toEqual(expected);
    });
});