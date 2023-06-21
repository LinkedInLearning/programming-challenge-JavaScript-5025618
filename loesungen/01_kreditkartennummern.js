function mask(cc){

  return cc.slice(0, -4).replace(/./g, '*') + cc.slice(-4);
  
  let readable = cc.substr(-4,4);
  let mask = cc.replace(/./gi,'*');

  return mask.substr(0,mask.length-4) + readable;
}

/*
  Maskieren Sie von einem gegebenem String alle Zeichen mit einem *,
  außer die letzten vier 
*/
var assert = require('assert');
describe('Kreditkartennummern maskieren', function() {
  it('Beispiele', function() {
    assert.equal(mask('1651645546111569'), '************1569');
    assert.equal(mask('4'), '4',);
    assert.equal(mask('11111'), '*1111');
  });
});
