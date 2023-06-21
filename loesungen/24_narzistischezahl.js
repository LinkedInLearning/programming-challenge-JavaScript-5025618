function narcissistic(value) {
    let digits = value.toString().split('');
    let pow = digits.length;

    let sum = digits.reduce((sum, val, index) => sum + Math.pow(val, pow), 0)

    return value == sum;
}

/*
    Eine narzisstische Zahl ist eine Zahl, die gleich ist der 
    Summe, nachdem man jede Ziffer mit der Zahl der Ziffern potenziert hat
    Beispiel:
    371 = 3^3 + 7^3 + 1^3 
    jeweils hoch 3, weil 371 drei Ziffern enthält.
   
    Überprüfen Sie, ob eine gegebene Zahl narzisstisch ist.
*/
var assert = require('assert');
describe('Nazistische Zahl', function () {
    it('Beispiele', function () {
        assert.equal(narcissistic(9), true);
        assert.equal(narcissistic(371), true);
        assert.equal(narcissistic(124), false);

    });
});



