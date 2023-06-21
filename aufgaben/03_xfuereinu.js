function xu(str) {
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
    Überprüfen Sie, ob eine Zeichenkette genauso viele x wie u enthält.
    Achten Sie nicht auf die Groß- und Kleinschreibung.
    Geben Sie true oder false zurück.    
*/

var assert = require('assert');
describe('X für ein U', function () {
    it('Beispiele', function () {
        assert.equal(xu('xu'),true);
        assert.equal(xu("xxuu"),true);
        assert.equal(xu("xxxm"),false);
        assert.equal(xu("Uu"),false);
        assert.equal(xu("uum"),false);
    });
});



