function duplicateCount(text) {

    return (text.toLowerCase().split('').sort().join('').match(/(.)\1+/g) || []).length;

    let letters = text.toLowerCase().split('');
    let duplicates = letters.filter(function( value, index, arr ){
        return arr.indexOf(value) !== index && arr.lastIndexOf(value) === index;
    })

    return duplicates.length;
}

/*
    Zählen Sie, wie viele verschiedene Buchstaben mehrmals vorkommen.
*/

var assert = require('assert');
describe('Doppelte', function () {
    it('Beispiele', function () {
        assert.equal(duplicateCount(""), 0);
        assert.equal(duplicateCount("sommerfrisch"), 3);
        assert.equal(duplicateCount("bergtauglich"), 1);
    });
});
