function isIsogram(str) {
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
    Isogramme sind Worte, in denen jeder Buchstabe höchstens einmal vorkommt. 
    Prüfen Sie, ob ein Wort ein Isogramm ist.
*/
var assert = require('assert');
describe('Isogramme', function () {
    it('Beispiele', function () {
        assert.equal(isIsogram("Europa"), true);
        assert.equal(isIsogram("Großkatzenimpfbuch"), true);
        assert.equal(isIsogram("Pokalbeschriftung"), true );
        assert.equal(isIsogram("Papa"), false,);
        assert.equal(isIsogram("Kanada"), false);
    });
});



