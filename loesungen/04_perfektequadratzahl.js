function perfectSquare(sq) {
    return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}

/*
    Finden Sie zu einer Quadratzahl die nächstgrößere Quadratzahl.
    Geben Sie -1 zurück, wenn der Input ungültig ist
*/

var assert = require('assert');
describe('Perfekte Quadratzahl', function () {
    it("Beispiele", function () {
        assert.equal(perfectSquare(121), 144 );
        assert.equal(perfectSquare(676), 729 );
        assert.equal(perfectSquare(114), -1 );
        assert.equal(perfectSquare(2165), -1 );
    });
});
