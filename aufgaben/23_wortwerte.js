function high(x) {
   // code here
   
}

/*
    Finden Sie das Wort mit dem höchsten Wortwert in einer Zeichenkette.
    Der Wert des Wortes wird bestimmt durch die Summe der Buchstabenwerte.
    a=1, b=2, c=3, ... z=26
    Geben Sie das Wort mit dem höchsten Wert zurück.

    Keine Sonderzeichen, keine Groß- und Kleinschreibung beachten.
*/
var assert = require('assert');
describe('Wortwerte', function () {
    it('Beispiele', function () {
        assert.equal(high('Ich bin ein kleiner Blindtext.'), 'kleiner');
        assert.equal(high('Ich werde nie in den Bestsellerlisten stehen.'), 'Bestsellerlisten');
        assert.equal(high('Aber andere Texte schaffen das auch nicht.'), 'schaffen');
    });

});

/*
  Um den Code zu testen, richten Sie eine Testumgebung ein
  1.) Installieren Sie Nodes (enhält npm) https://nodejs.org/en/
  2.) Installieren Sie mocha mit $ npm install --global mocha https://mochajs.org/

  Um einen Test auszuführen, tippen Sie auf der Kommandozeile
  $ mocha <name_der_datei>

*/

