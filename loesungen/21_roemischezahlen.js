function convertire(number) {
    var nums = { CM: 900, CD: 400, XC: 90, XL: 40, IX: 9, IV: 4, 
                 M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 }

    for (let n in nums) {
        number = number.replace(new RegExp(n, 'g'), '+' + nums[n] );
    }

    return eval(number);
}

/*
    Übersetzen Sie eine lateinische Zahl in unser arabisches Format
*/

var assert = require('assert');
describe('Römische Zahlen', function () {
    it('Beispiele', function () {
        assert.equal(convertire('I'), 1)
        assert.equal(convertire('II'), 2)
        assert.equal(convertire('XXII'), 22)
        assert.equal(convertire('XIV'), 14)
        assert.equal(convertire('MMXX'), 2020)
        assert.equal(convertire('MCMLXXVI'), 1976)
    });
});

