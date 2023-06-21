function encrypt(text, n) {
    for (let i = 0; i < n; i++) {
        text = text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1')
    }

    return text
}

function decrypt(text, n) {
    let middle = text.length / 2
    for (let i = 0; i < n; i++) {
        text = text.slice(middle).replace(/./g, function (b, i) {
            
         return b + (i < middle ? text[i] : '')
        })
    }
    return text
}

/*
    Verschlüsseln und Entschlüsseln Sie eine Zeichenkette nach diesen Regeln:

    Nehmen Sie jeden zweiten Buchstaben einer Zeichenkette
    Dann die übrigen Buchstaben
    Verbinden Sie beide Teile

    Wiederholen Sie das n mal.
*/
var assert = require('assert');
describe('Verschlüsselung', function () {
    it('Beispiele', function () {
        assert.equal(encrypt("Dieser Text hat eigentlich keinen Inhalt", 1), "isrTx a ietihkie natDee ethtegnlc ennIhl");
        assert.equal(encrypt("Dieser Text hat eigentlich keinen Inhalt", 3), "T iet tlnlratiaehnehs eknetg Iixih Deecn");
    
        assert.equal(decrypt("isrTx a ietihkie natDee ethtegnlc ennIhl", 1), "Dieser Text hat eigentlich keinen Inhalt");
        assert.equal(decrypt("T iet tlnlratiaehnehs eknetg Iixih Deecn", 3), "Dieser Text hat eigentlich keinen Inhalt");
    });
});

