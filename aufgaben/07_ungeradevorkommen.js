function odds(A) {
  // code here
}
/*
  Um den Code zu testen, richten Sie eine Testumgebung ein
  1.) Installieren Sie Nodes (enhält npm) https://nodejs.org/en/
  2.) Installieren Sie mocha mit $ npm install --global mocha https://mochajs.org/

  Um einen Test auszuführen, tippen Sie auf der Kommandozeile
  $ mocha <name_der_datei>

*/
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
