function likes(names) {
      // code here
   
}

/*
    Geben Sie den passenden Text aus, je nachdem, wie viele Likes es gibt.
*/

var assert = require('assert');
describe('Likes', function () {
    it('Beispiele', function () {
        assert.equal(likes([]), 'niemandem gefällt das');
        assert.equal(likes(['Frank']), 'Frank mag das');
        assert.equal(likes(['Maria', 'Alexandra']), 'Maria und Alexandra mögen das');
        assert.equal(likes(['Max', 'Johannes', 'Mark']), 'Max, Johannes und Mark mögen das');
        assert.equal(likes(['Alexandra', 'Maria', 'Mark', 'Max']), 'Alexandra, Maria und 2 weitere mögen das');
    });
});
/*
  Um den Code zu testen, richten Sie eine Testumgebung ein
  1.) Installieren Sie Nodes (enhält npm) https://nodejs.org/en/
  2.) Installieren Sie mocha mit $ npm install --global mocha https://mochajs.org/

  Um einen Test auszuführen, tippen Sie auf der Kommandozeile
  $ mocha <name_der_datei>

*/