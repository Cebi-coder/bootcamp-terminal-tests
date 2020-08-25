let assert = require("assert");
let fromWhere = require("../fromWhere");


describe("the fromWhere function", function () {

    it('should return Bellville for the registration number starting with CY', function () {


        assert.equal("Bellville", fromWhere("CY"));

    });

    it("should return Paarl for the registration number starting with CJ", function () {

        assert.equal("Paarl", fromWhere("CJ"));
    });
    it("should return Cape Town for the registration number starting with CA", function () {

        assert.equal("Cape Town", fromWhere("CA"));
    });
});






