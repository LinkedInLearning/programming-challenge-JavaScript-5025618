function narcissistic(value) {
   // code here
   
}

/*
    Eine narzisstische Zahl ist eine Zahl, die gleich ist der 
    Summe, nachdem man jede Ziffer mit der Zahl der Ziffern potenziert hat
    Beispiel:
    371 = 3^3 + 7^3 + 1^3 
    jeweils hoch 3, weil 371 drei Ziffern enthält.
   
    Überprüfen Sie, ob eine gegebene Zahl narzisstisch ist.
*/
var assert = require('assert');
describe('Nazistische Zahl', function () {
    it('Beispiele', function () {
        assert.equal(narcissistic(9), true);
        assert.equal(narcissistic(371), true);
        assert.equal(narcissistic(124), false);

    });
});

/*
  Um den Code zu testen, richten Sie eine Testumgebung ein
  1.) Installieren Sie Nodes (enhält npm) https://nodejs.org/en/
  2.) Installieren Sie mocha mit $ npm install --global mocha https://mochajs.org/

  Um einen Test auszuführen, tippen Sie auf der Kommandozeile
  $ mocha <name_der_datei>

*/



