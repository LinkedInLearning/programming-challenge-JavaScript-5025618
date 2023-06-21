function convertDna(dna) {
    var pairs = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };
    return dna.split('').map((v) => pairs[v]).join('');



    return dna.replace(/./g, function (match) {
        switch (match) {
            case 'A': return 'T';
            case 'T': return 'A';
            case 'G': return 'C';
            case 'C': return 'G';

        }
    })

}

/*
    Erzeugen Sie das Gegenstück zu einem DNA-Code
    Aus A wird T, aus T wieder A,
    aus C wird G, aus G wieder C
*/
var assert = require('assert');
describe('DNA', function () {
    it('Beispiele', function () {
        assert.equal(convertDna("ATTCA"), "TAAGT");
        assert.equal(convertDna("AGCTT"), "TCGAA");
        assert.equal(convertDna("GATTA"), "CTAAT");
    });
});



