function longestWord(s) {
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
    Geben Sie die Länge des kürzesten Wortes in einer Zeichenkette zurück.
*/

var assert = require('assert');
describe('Kürzestes Wort', function () {
    it('Beispiele', function () {

        assert.equal(longestWord("Oft unterschätzt und sträflich vernachlässigt: Blindtexte! Es muss nicht immer Lorem Ipsum sein."), 15);
        assert.equal(longestWord("Hallo. Ich bin ein kleiner Blindtext. Und zwar schon sehr lange."), 10);
    });
});
