let assert = require("assert");
let regCheck = require("../regCheck");

describe('The regCheck function', function () {

    it('should return true if the registration number is for GP', function () {
        assert.equal(true, regCheck('DV 23 NB GP', 'GP'));
    });
    it('should return false if the registration number is not from Gauteng', function () {

        assert.equal(false, regCheck('DV 23 NB GP', 'MP'));
    });
});