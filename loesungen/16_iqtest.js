function iqTest(numbers) {
    let nums = numbers.split(' ');
    let even = nums.filter(num => num % 2 === 0);
    let odd = nums.filter(num => num % 2 === 1);

    return (even.length === 1) ? nums.indexOf(even[0]) + 1 : nums.indexOf(odd[0]) + 1;
}

/*
    Finden Sie die Position der Zahl, die als einzige ungerade bzw. gerade ist
*/

var assert = require('assert');
describe('IQ Test', function () {
    it('Beispiele', function () {
        assert.equal(iqTest("2 4 6 7 8 10"), 4);
        assert.equal(iqTest("1 8 8 12 110"), 1);
    });
});
