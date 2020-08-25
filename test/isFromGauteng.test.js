let assert = require("assert");
let isFromGauteng = require("../isFromGauteng");

describe('The isFromGauteng function', function () {

    it('should return true if the registration number is from Gauteng', function () {
        assert.equal(true, isFromGauteng('GP'));
    });
    it('should return false if the registration number is not from Gauteng', function () {

        assert.equal(false, isFromGauteng(' '));
    });
});