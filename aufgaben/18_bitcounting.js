function countBits(n) {
     // code here
    
}


/*
  Zählen Sie die Anzahl der Einsen in der binären Schreibweise einer Zahl
*/

var assert = require('assert');
describe('Bitcounting', function () {
    it('Beispiele', function () {
        assert.equal(countBits(0), 0);
        assert.equal(countBits(5), 2);
        assert.equal(countBits(9), 2);
        assert.equal(countBits(12), 2);

    });
});

/*
  Um den Code zu testen, richten Sie eine Testumgebung ein
  1.) Installieren Sie Nodes (enhält npm) https://nodejs.org/en/
  2.) Installieren Sie mocha mit $ npm install --global mocha https://mochajs.org/

  Um einen Test auszuführen, tippen Sie auf der Kommandozeile
  $ mocha <name_der_datei>

*/