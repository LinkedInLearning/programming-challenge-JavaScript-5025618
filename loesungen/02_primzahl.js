function isprime(num) {
    if (num < 2) return false;

    if( num != 2 && num%2 == 0 ) return false;

    for (let i = 3; i <= num / 2; i+=2) {
        if (num % i == 0) return false;
    }
    return true;
}

/*
    Überprüfen Sie, ob eine Zahl prim ist.
    Per Definition sind Primzahlen immer größer als 1
    und nur durch 1 und sich selbst restlos teilbar
*/
var assert = require('assert');
describe('Primzahlen', function () {
    it('Beispiele', function () {
        assert.equal(isprime(0), false);
        assert.equal(isprime(1), false);
        assert.equal(isprime(2), true);
        assert.equal(isprime(12), false);
        assert.equal(isprime(73), true);
        assert.equal(isprime(5099), true);
        assert.equal(isprime(999907), true);
        assert.equal(isprime(800000107), true);

    });
});



