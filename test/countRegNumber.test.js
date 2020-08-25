let assert = require("assert");
let countRegNumber = require("../countRegNumber");

it("should return 1 for CY 123-123", function () {
   assert.equal(1, countRegNumber("CY 123-223, CA 123-123"));
});

it("should return 2 for CY 123-123", function () {
    var EXPECTED_COUNT = 2
    assert.equal(2, countRegNumber("CY 123-123,CY 123-123, CA 123-123"));
});

it("should return 5 for CY 123-123", function () {
    var EXPECTED_COUNT = 5;
});
