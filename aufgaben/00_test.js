function add(a, b) {
   // code here
   
}

/*
  Um den Code zu testen, richten Sie eine Testumgebung ein
  1.) Installieren Sie Nodes (enhält npm) https://nodejs.org/en/
  2.) Installieren Sie mocha mit $ npm install --global mocha https://mochajs.org/

  Um einen Test auszuführen, tippen Sie auf der Kommandozeile
  $ mocha <name_der_datei>

*/

var assert = require('assert');
describe('Test', function () {
    it('Beispiele', function () {
        assert.equal(add(2, 3), 5);
        assert.equal(add(7, 2), 9);       
    });
});
