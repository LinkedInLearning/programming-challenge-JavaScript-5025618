function toCamelCase(str) {

    var regExp = /[-_]\w/ig;
    return str.replace(regExp, function (match) {
        return match.charAt(1).toUpperCase();
    });



    let words = str.split(/[_\-]/);
    let ccword = words[0];

    for (i = 1; i < words.length; i++) {
        ccword += words[i].charAt(0).toUpperCase() + words[i].slice(1)
    }
    return ccword;
}

/*
    Konvertieren Sie eine Zeichenkette in CamelCase.
    Ersetzten Sie nur - und _
    Der allererste Buchstabe bleibt klein bzw. groß, er wird nicht konvertiert.
*/

var assert = require('assert');
describe('CamelCase', function () {
    it('Beispiele', function () {
        assert.equal(toCamelCase(''), '')
        assert.equal(toCamelCase("Ein-kleiner-Blindtext"), "EinKleinerBlindtext")
        assert.equal(toCamelCase("happy_programming"), "happyProgramming")

    });
});

