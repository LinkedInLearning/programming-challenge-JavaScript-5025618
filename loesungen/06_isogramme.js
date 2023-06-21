function isIsogram(str) {

    return !/(\w).*\1/i.test(str);

    str = str.toLowerCase();
    let duplicates = str.split('').filter(
        (value) => str.indexOf(value) !== str.lastIndexOf(value)
    )

    return (duplicates.length == 0);
}

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



