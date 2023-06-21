function queueTime(customers, n) {
    var w = new Array(n).fill(0);
    for (let t of customers) {
      let idx = w.indexOf(Math.min(...w));
      w[idx] += t;
    }
    return Math.max(...w);

    
    /*
    let time = 0;
    let tills = new Array(n);
    tills.fill(0);

    while (true) {
        
        for (t = 0; t < tills.length; t++) {
            if (tills[t] > 1) {
                tills[t]--;
            }else{
                tills[t] = customers.shift() || 0;
            }
        }
       
        if(customers.length == 0 && Math.max(...tills) == 0 ) return time;

        time++;
    }
    */

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

