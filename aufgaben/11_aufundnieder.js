function upAndDown(str) {
   // code here
   
}

/*
    Geben Sie die größte und kleinste Zahl zurück.
    Sie erhalten eine Zeichenkette mit Leerzeichen zwischen den Zahlen.
*/


var assert = require('assert');
describe('Auf und nieder', function () {
    it('Beispiele', function () {
        assert.equal(upAndDown("54 21 789 3 3314 12 364 2"), "3314 2");
    });
});
/*
  Um den Code zu testen, richten Sie eine Testumgebung ein
  1.) Installieren Sie Nodes (enhält npm) https://nodejs.org/en/
  2.) Installieren Sie mocha mit $ npm install --global mocha https://mochajs.org/

  Um einen Test auszuführen, tippen Sie auf der Kommandozeile
  $ mocha <name_der_datei>

*/
