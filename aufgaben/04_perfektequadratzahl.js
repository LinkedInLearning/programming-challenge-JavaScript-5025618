function perfectSquare(sq) {
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
    Finden Sie zu einer Quadratzahl die nächstgrößere Quadratzahl.
    Geben Sie -1 zurück, wenn der Input ungültig ist
*/

var assert = require('assert');
describe('Perfekte Quadratzahl', function () {
    it("Beispiele", function () {
        assert.equal(perfectSquare(121), 144 );
        assert.equal(perfectSquare(676), 729 );
        assert.equal(perfectSquare(114), -1 );
        assert.equal(perfectSquare(2165), -1 );
    });
});
