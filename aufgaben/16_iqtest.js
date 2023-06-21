function iqTest(numbers) {
   // code here
   
}

/*
    Finden Sie die Position der Zahl, die als einzige ungerade bzw. gerade ist
*/

var assert = require('assert');
describe('IQ Test', function () {
    it('Beispiele', function () {
        assert.equal(iqTest("2 4 6 7 8 10"), 4);
        assert.equal(iqTest("1 8 8 12 110"), 1);
    });
});
/*
  Um den Code zu testen, richten Sie eine Testumgebung ein
  1.) Installieren Sie Nodes (enhält npm) https://nodejs.org/en/
  2.) Installieren Sie mocha mit $ npm install --global mocha https://mochajs.org/

  Um einen Test auszuführen, tippen Sie auf der Kommandozeile
  $ mocha <name_der_datei>

*/
