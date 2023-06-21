function convertDna(dna) {
      // code here
    
}

/*
    Erzeugen Sie das Gegenstück zu einem DNA-Code
    Aus A wird T, aus T wieder A,
    aus C wird G, aus G wieder C
*/
var assert = require('assert');
describe('DNA', function () {
    it('Beispiele', function () {
        assert.equal(convertDna("ATTCA"), "TAAGT");
        assert.equal(convertDna("AGCTT"), "TCGAA");
        assert.equal(convertDna("GATTA"), "CTAAT");
    });
});

/*
  Um den Code zu testen, richten Sie eine Testumgebung ein
  1.) Installieren Sie Nodes (enhält npm) https://nodejs.org/en/
  2.) Installieren Sie mocha mit $ npm install --global mocha https://mochajs.org/

  Um einen Test auszuführen, tippen Sie auf der Kommandozeile
  $ mocha <name_der_datei>

*/

