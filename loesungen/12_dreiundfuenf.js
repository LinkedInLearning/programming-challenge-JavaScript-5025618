function threeAndFive(border) {
    let sum = 0;
    for (i = 1; i < border; i++) {
        if (i % 3 == 0 || i % 5 == 0)
            sum += i;
    }
    return sum;
}

/*
    Die Liste aller Zahlen z.B. unter 10, die ein Vielfaches von 3 oder 5 sind, lautet:
    3,5,6 und 9. Deren Summe ist 23.

    Schreiben Sie eine Funktion, die die Summe aller Vielfachen von 3 und 5 unterhalb der
    gegebenen Grenze ausgibt.
*/

var assert = require('assert');
describe('Drei und fünf', function () {
    it('Beispiele', function () {
        assert.equal(threeAndFive(10), 23);
        assert.equal(threeAndFive(17), 60);
        assert.equal(threeAndFive(53), 644);

    });
});
