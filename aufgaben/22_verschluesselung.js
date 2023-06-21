function encrypt(text, n) {
   // code here
   
}

function decrypt(text, n) {
   // code here
   
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

/*
  Um den Code zu testen, richten Sie eine Testumgebung ein
  1.) Installieren Sie Nodes (enhält npm) https://nodejs.org/en/
  2.) Installieren Sie mocha mit $ npm install --global mocha https://mochajs.org/

  Um einen Test auszuführen, tippen Sie auf der Kommandozeile
  $ mocha <name_der_datei>

*/

