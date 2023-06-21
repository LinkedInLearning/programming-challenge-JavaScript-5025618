function isValidWalk(walk) {
   // code here
   
}

/*
    Prüfen Sie, ob Sie nach zehn Minuten wieder am Ausganspunkt sind.
*/

var assert = require('assert');
describe('Zehn Minuten Spaziergang', function () {
    it('Beispiele', function () {
        //some test cases for you...
        assert.equal(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), true);
        assert.equal(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']), true);
        assert.equal(isValidWalk(['s', 'w']), false);
        assert.equal(isValidWalk(['n', 's', 'n', 's', 'n', 'n', 'n', 's', 'n', 's']), false);
    });
});
/*
  Um den Code zu testen, richten Sie eine Testumgebung ein
  1.) Installieren Sie Nodes (enhält npm) https://nodejs.org/en/
  2.) Installieren Sie mocha mit $ npm install --global mocha https://mochajs.org/

  Um einen Test auszuführen, tippen Sie auf der Kommandozeile
  $ mocha <name_der_datei>

*/