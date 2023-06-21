function threeAndFive(border) {
   // code here
   
}

/*
    Die Liste aller Zahlen z.B. unter 10, die ein Vielfaches von 3 oder 5 sind, lautet:
    3,5,6 und 9. Deren Summe ist 23.

    Schreiben Sie eine Funktion, die die Summe aller Vielfachen von 3 und 5 unterhalb der
    gegebenen Grenze ausgibt.
*/

var assert = require('assert');
describe('Drei und fünf', function () {
    it('Beispiele', function () {
        assert.equal(threeAndFive(10), 23);
        assert.equal(threeAndFive(17), 60);
        assert.equal(threeAndFive(53), 644);

    });
});

/*
  Um den Code zu testen, richten Sie eine Testumgebung ein
  1.) Installieren Sie Nodes (enhält npm) https://nodejs.org/en/
  2.) Installieren Sie mocha mit $ npm install --global mocha https://mochajs.org/

  Um einen Test auszuführen, tippen Sie auf der Kommandozeile
  $ mocha <name_der_datei>

*/
