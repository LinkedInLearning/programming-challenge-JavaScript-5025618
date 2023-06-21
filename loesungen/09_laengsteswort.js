function longestWord(s) {
    let words = s.split(" ");
    let longest = words[0].length;
    for (i = 0; i < words.length; i++) {
        if (words[i].length > longest) longest = words[i].length;
    }
    return longest;



    words.sort(function (a, b) {
        return b.length - a.length;
    });

    
    return words[0].length;


    return Math.max.apply(null, s.split(' ').map(w => w.length));
}

/*
    Geben Sie die Länge des kürzesten Wortes in einer Zeichenkette zurück.
*/

var assert = require('assert');
describe('Kürzestes Wort', function () {
    it('Beispiele', function () {

        assert.equal(longestWord("Oft unterschätzt und sträflich vernachlässigt: Blindtexte! Es muss nicht immer Lorem Ipsum sein."), 15);
        assert.equal(longestWord("Hallo. Ich bin ein kleiner Blindtext. Und zwar schon sehr lange."), 10);
    });
});
