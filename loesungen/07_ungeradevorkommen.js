function odds(A) {
  let counter = {};

  for (let a of A) {
    let as = a.toString();
    (counter[as] === undefined) ? counter[as] = 1 : counter[as]++;
  }

  for (number in counter) {
    if (counter[number] % 2 === 1) return parseInt(number);
  };
}

/*
  Gegeben ist ein Array mit Zahlen, die mehrmals vorkommen.
  Finden Sie diejenige Zahl heraus, die ungerade häufig vorkommt, 
*/

var assert = require('assert');
describe('Ungerade Vorkommen', function () {
  it('Beispiele', function () {
    assert.equal(odds([2, 2, 2, 3, 2, 2, 2, 2, 2]), 3);
    assert.equal(odds([7]), 7);
    assert.equal(odds([5, 8, 6, 4, 4, 5, 6, 8, 1]), 1);
  });
});
