function getVowal(str) {
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
    Zählen Sie die Vokale in einer Zeichenkette.
*/


var assert = require('assert');
describe('Anzahl der Vokale', function () {
    it('Beispiele', function () {
        assert.equal(getVowal("sommerfrisch"), 3);
        assert.equal(getVowal("Opa"), 2);
        assert.equal(getVowal("holladiewaldfee"), 7);
    });
});
