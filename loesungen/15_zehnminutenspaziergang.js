function isValidWalk(walk) {

    function count(val) {
        return walk.filter(function (a) { return a == val; }).length;
    }
    return walk.length == 10 && count('n') == count('s') && count('w') == count('e');





    // Alternative
    if (walk.length !== 10) return false;

    let pos = { x: 0, y: 0 }

    for (i = 0; i < 10; i++) {
        switch (walk[i]) {
            case 'n':
                pos.y--;
                break;
            case 's':
                pos.y++;
                break;
            case 'w':
                pos.x--;
                break;
            case 'e':
                pos.x++;
                break;
        }
    }

    return (pos.x === 0 && pos.y == 0);
}

/*
    Prüfen Sie, ob Sie nach zehn Minuten wieder am Ausganspunkt sind.
*/

var assert = require('assert');
describe('Zehn Minuten Spaziergang', function () {
    it('Beispiele', function () {
        //some test cases for you...
        assert.equal(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), true);
        assert.equal(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']), true);
        assert.equal(isValidWalk(['s', 'w']), false);
        assert.equal(isValidWalk(['n', 's', 'n', 's', 'n', 'n', 'n', 's', 'n', 's']), false);
    });
});
