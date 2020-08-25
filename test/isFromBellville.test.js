let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('The isFromBellville function', function(){

    it('should return true if registration number starts with CY', function(){
        assert.equal(true, isFromBellville('CY'));
    });
    it('return false if registration number does not start with CY', function(){
    
        assert.equal(false, isFromBellville('CJ'));
    });
});