function countBits(n) {
   
  return (n.toString(2).match(/1/g) || [] ).length;
  // return  n.toString(2).split('0').join('').length;
  // return n.toString(2).replace(/0/g,'').length;
}


/*
  Zählen Sie die Anzahl der Einsen in der binären Schreibweise einer Zahl
*/

var assert = require('assert');
describe('Bitcounting', function () {
    it('Beispiele', function () {
        assert.equal(countBits(0), 0);
        assert.equal(countBits(5), 2);
        assert.equal(countBits(9), 2);
        assert.equal(countBits(12), 2);

    });
});
