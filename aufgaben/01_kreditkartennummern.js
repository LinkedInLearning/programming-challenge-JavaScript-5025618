function mask(cc) {
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
  Maskieren Sie von einem gegebenem String alle Zeichen mit einem *,
  außer die letzten vier 
*/
var assert = require('assert');
describe('Kreditkartennummern maskieren', function () {
  it('Beispiele', function () {
    assert.equal(mask('1651645546111569'), '************1569');
    assert.equal(mask('4'), '4');
    assert.equal(mask('11111'), '*1111');
  });
});
