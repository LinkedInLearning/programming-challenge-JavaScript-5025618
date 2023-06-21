function high(x) {

    let as = x.split(' ').map(x=>[...x].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    return x.split(' ')[as.indexOf(Math.max(...as))];   

    let words = x.split(' ');
    let highscore = 0;
    let highscorer = '';

    for (word of words) {
        let letters = word.split('');

        let score = letters.reduce((sum, val) => sum + val.charCodeAt(0) - 97, 0);
        if (score > highscore) {
            highscore = score;
            highscorer = word;
        }

    }
    return highscorer;
}

/*
    Finden Sie das Wort mit dem höchsten Wortwert in einer Zeichenkette.
    Der Wert des Wortes wird bestimmt durch die Summe der Buchstabenwerte.
    a=1, b=2, c=3, ... z=26
    Geben Sie das Wort mit dem höchsten Wert zurück.

    Keine Sonderzeichen, keine Groß- und Kleinschreibung beachten.
*/
var assert = require('assert');
describe('Wortwerte', function () {
    it('Beispiele', function () {
        assert.equal(high('Ich bin ein kleiner Blindtext.'), 'kleiner');
        assert.equal(high('Ich werde nie in den Bestsellerlisten stehen.'), 'Bestsellerlisten');
        assert.equal(high('Aber andere Texte schaffen das auch nicht.'), 'schaffen');
    });

});

