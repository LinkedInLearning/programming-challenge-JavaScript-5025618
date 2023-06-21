function upAndDown(str) {
    let numbers = str.split(" ").map(Number);

    return Math.max(...numbers) + " " + Math.min(...numbers);
}

/*
    Geben Sie die größte und kleinste Zahl zurück.
    Sie erhalten eine Zeichenkette mit Leerzeichen zwischen den Zahlen.
*/


var assert = require('assert');
describe('Auf und nieder', function () {
    it('Beispiele', function () {
        assert.equal(upAndDown("54 21 789 3 3314 12 364 2"), "3314 2");
    });
});
