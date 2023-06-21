function tree(n) {

    // return Array.from({ length: n }, function (v, k) {
    //     const spaces = ' '.repeat(n - k - 1);
    //     return spaces + '*'.repeat(k + k + 1) + spaces;
    // });

    let rows = [];
    let padding = '';
    let stars = new Array((n * 2)).join('*');

    for (i = n; i >= 1; i--) {
        rows.unshift(padding + stars + padding);
        padding += ' ';
        stars = stars.substring(0, stars.length - 2);
    }

    return rows;
}

/*
    Malen Sie einen Turm mit n Ebenen.
    Geben Sie ein Array zurück.
   *
  ***
 *****
*******
*/

var assert = require('assert');
describe('Türme', function () {
    it('Beispiele', function () {
        assert.deepEqual(tree(1), ["*"]);
        assert.deepEqual(tree(2), [" * ", "***"]);
        assert.deepEqual(tree(3), ["  *  ", " *** ", "*****"]);
    });
});

