function goldenMiddle(word) {
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
    Geben Sie von einem Wort nur den mittleren Buchstaben aus.
    Gibt es keinen Buchstaben genau in der Mitte, geben Sie die zwei mittleren Buchstaben aus
*/

var assert = require('assert');
describe('Goldene Mitte', function () {
    it("Beispiele", function () {
        assert.equal(goldenMiddle("holla"), "l");
        assert.equal(goldenMiddle("die"), "i");
        assert.equal(goldenMiddle("waldfee"), "d");
        assert.equal(goldenMiddle("kaffee"), "ff");

    });
});
