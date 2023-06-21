function toCamelCase(str) {
   // code here
   
}

/*
    Konvertieren Sie eine Zeichenkette in CamelCase.
    Ersetzten Sie nur - und _
    Der allererste Buchstabe bleibt klein bzw. groß, er wird nicht konvertiert.
*/

var assert = require('assert');
describe('CamelCase', function () {
    it('Beispiele', function () {
        assert.equal(toCamelCase(''), '')
        assert.equal(toCamelCase("Ein-kleiner-Blindtext"), "EinKleinerBlindtext")
        assert.equal(toCamelCase("happy_programming"), "happyProgramming")

    });
});

/*
  Um den Code zu testen, richten Sie eine Testumgebung ein
  1.) Installieren Sie Nodes (enhält npm) https://nodejs.org/en/
  2.) Installieren Sie mocha mit $ npm install --global mocha https://mochajs.org/

  Um einen Test auszuführen, tippen Sie auf der Kommandozeile
  $ mocha <name_der_datei>

*/

