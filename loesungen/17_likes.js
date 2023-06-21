function likes(names) {
    
    var templates = [
        'niemandem gefällt das',
        '{name} mag das',
        '{name} und {name} mögen das',
        '{name}, {name} und {name} mögen das',
        '{name}, {name} und {n} weitere mögen das'
    ];
    var idx = Math.min(names.length, 4);

    return templates[idx].replace(/{name}|{n}/g, function (val) {
        return val === '{name}' ? names.shift() : names.length;
    });

   
}

/*
    Geben Sie den passenden Text aus, je nachdem, wie viele Likes es gibt.
*/

var assert = require('assert');
describe('Likes', function () {
    it('Beispiele', function () {
        assert.equal(likes([]), 'niemandem gefällt das');
        assert.equal(likes(['Frank']), 'Frank mag das');
        assert.equal(likes(['Maria', 'Alexandra']), 'Maria und Alexandra mögen das');
        assert.equal(likes(['Max', 'Johannes', 'Mark']), 'Max, Johannes und Mark mögen das');
        assert.equal(likes(['Alexandra', 'Maria', 'Mark', 'Max']), 'Alexandra, Maria und 2 weitere mögen das');
    });
});
