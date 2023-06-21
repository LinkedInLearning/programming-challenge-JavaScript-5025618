function queueTime(customers, n) {
   // code here
   

}

/*
    Sie befinden Sich im Supermarkt.
    Es gibt n offene Kassen. 
    Für alle Kassen gibt es eine gemeinsame Warteschlange.
    Sobald eine Kasse leer wird, geht der nächste Kunde sofort hin
    Sie erhalten ein Array mit Kunden, darin sind die Kassierzeiten jedes Kunden vermerkt, 
    also wie lange er oder sie an der Kasse brauchen wird

    Finden Sie die Zeit heraus, bis alle Kunden den Laden verlassen haben
*/

var assert = require('assert');
describe('Supermarktkassen', function () {
    it('Beispiele', function () {
        assert.equal(queueTime([], 1), 0);
        assert.equal(queueTime([1, 2, 3, 4], 1), 10);
        assert.equal(queueTime([2, 2, 3, 3, 4, 4], 2), 9);
        assert.equal(queueTime([1, 2, 3, 4, 5], 20), 5);
    });
});
/*
  Um den Code zu testen, richten Sie eine Testumgebung ein
  1.) Installieren Sie Nodes (enhält npm) https://nodejs.org/en/
  2.) Installieren Sie mocha mit $ npm install --global mocha https://mochajs.org/

  Um einen Test auszuführen, tippen Sie auf der Kommandozeile
  $ mocha <name_der_datei>

*/

