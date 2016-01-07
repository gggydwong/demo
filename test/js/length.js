var assert = require('assert');

describe('hooks', function() {
    var arr;
   before(function() {
      arr = []; 
   });
   
   describe('Array', function() {
       describe('#length()', function() {
           this.slow(100000);
        it('should return 0 when the value is not present', function() {
            assert.equal(0,arr.length); 
        });
    });
    });
});

