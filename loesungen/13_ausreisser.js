function outlier(a) {
    var even = a.filter(a => a % 2 == 0);
    var odd = a.filter(a => a % 2 !== 0);
    return even.length == 1 ? even[0] : odd[0];

    /*
    let isEven = (
        (a[0] % 2 === 0 && a[1] % 2 === 0) ||
        (a[0] % 2 === 0 && a[2] % 2 === 0) ||
        (a[1] % 2 === 0 && a[2] % 2 === 0)
    ) ? true : false;

    for (i = 0; i < a.length; i++) {
        if (isEven && a[i] % 2 !== 0) return a[i]; // not 1, because of negative numbers
        if (!isEven && a[i] % 2 === 0) return a[i];
    }
    */
}

/*
    Finden Sie diejenige Zahl, die als einzige ungerade bzw. gerade ist.
*/

var assert = require('assert');
describe('Ausreisser', function () {
    it('Beispiele', function () {
        assert.equal(outlier([0, 1, 2, 4 ,6, 12]), 1)
        assert.equal(outlier([1, 2, 3, 5, 17, 21 ]), 2)
        assert.equal(outlier([2, 6, 10, -3, 12, 20, 22]), -3)

    });
});
