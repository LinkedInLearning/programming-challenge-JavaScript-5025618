function convertire(number) {
    // code here
     
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

/*
  Um den Code zu testen, richten Sie eine Testumgebung ein
  1.) Installieren Sie Nodes (enhält npm) https://nodejs.org/en/
  2.) Installieren Sie mocha mit $ npm install --global mocha https://mochajs.org/

  Um einen Test auszuführen, tippen Sie auf der Kommandozeile
  $ mocha <name_der_datei>

*/

