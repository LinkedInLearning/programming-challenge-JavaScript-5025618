function getVowal(str) {
    return (str.match(/[aeiou]/ig) || []).length;
}

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
