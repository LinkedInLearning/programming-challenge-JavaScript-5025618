function xu(str) {
    return (str.toLowerCase().match(/x/g) || []).length == (str.toLowerCase().match(/u/g) || []).length;
}

/*
    Überprüfen Sie, ob eine Zeichenkette genauso viele x wie u enthält.
    Achten Sie nicht auf die Groß- und Kleinschreibung.
    Geben Sie true oder false zurück.    
*/

var assert = require('assert');
describe('X für ein U', function () {
    it('Beispiele', function () {
        assert.equal(xu('xu'),true);
        assert.equal(xu("xxuu"),true);
        assert.equal(xu("xxxm"),false);
        assert.equal(xu("Uu"),false);
        assert.equal(xu("uum"),false);
    });
});



