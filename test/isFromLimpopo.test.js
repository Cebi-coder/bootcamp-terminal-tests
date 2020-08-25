let assert = require("assert");
let isFromLimpopo = require("../isFromLimpopo");

describe('The isFromGauteng function', function () {

    it('should return true if the registration number is from Gauteng', function () {
        assert.equal(true, isFromLimpopo('L'));
    });
    it('should return false if the registration number is not from Gauteng', function () {

        assert.equal(false, isFromLimpopo(' '));
    });
});