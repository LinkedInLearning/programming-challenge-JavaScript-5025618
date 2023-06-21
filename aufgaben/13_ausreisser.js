function outlier(a) {
   // code here
   
}

/*
    Finden Sie diejenige Zahl, die als einzige ungerade bzw. gerade ist.
*/

var assert = require('assert');
describe('Ausreisser', function () {
    it('Beispiele', function () {
        assert.equal(outlier([0, 1, 2, 4 ,6, 12]), 1)
        assert.equal(outlier([1, 2, 3, 5, 17, 21 ]), 2)
        assert.equal(outlier([2, 6, 10, -3, 12, 20, 22]), -3)

    });
});
/*
  Um den Code zu testen, richten Sie eine Testumgebung ein
  1.) Installieren Sie Nodes (enhält npm) https://nodejs.org/en/
  2.) Installieren Sie mocha mit $ npm install --global mocha https://mochajs.org/

  Um einen Test auszuführen, tippen Sie auf der Kommandozeile
  $ mocha <name_der_datei>

*/