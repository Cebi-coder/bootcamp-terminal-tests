let assert = require("assert");
let isFromCapeTown = require("../isFromCapeTown");

describe('The isFromCapeTown function', function () {

    it('should return true if the registration number is from Cape Town', function () {
        assert.equal(true, isFromCapeTown('CA'));
    });
    it('should return false if the registration number is not from Cape Town', function () {

        assert.equal(false, isFromCapeTown('CJ'));
    });
});