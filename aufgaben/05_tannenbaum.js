function tree(n) {
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
    Malen Sie einen Turm mit n Ebenen.
    Geben Sie ein Array zurück.
   *
  ***
 *****
*******
*/

var assert = require('assert');
describe('Türme', function () {
    it('Beispiele', function () {
        assert.deepEqual(tree(1), ["*"]);
        assert.deepEqual(tree(2), [" * ", "***"]);
        assert.deepEqual(tree(3), ["  *  ", " *** ", "*****"]);
    });
});

