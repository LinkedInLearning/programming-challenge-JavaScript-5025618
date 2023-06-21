function goldenMiddle(word) {
 
    //return word.slice((word.length-1)/2, word.length/2+1);
    
    let middle = Math.ceil(word.length / 2) - 1;
    return (word.length % 2 === 0) ? word.substr(middle, 2) : word.substr(middle, 1);
    return word.substr(middle, 2 - (word.length % 2));
}

/*
    Geben Sie von einem Wort nur den mittleren Buchstaben aus.
    Gibt es keinen Buchstaben genau in der Mitte, geben Sie die zwei mittleren Buchstaben aus
*/

var assert = require('assert');
describe('Goldene Mitte', function () {
    it("Beispiele", function () {
        assert.equal(goldenMiddle("holla"), "l");
        assert.equal(goldenMiddle("die"), "i");
        assert.equal(goldenMiddle("waldfee"), "d");
        assert.equal(goldenMiddle("kaffee"), "ff");

    });
});
