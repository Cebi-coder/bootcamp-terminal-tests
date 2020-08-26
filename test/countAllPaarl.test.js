let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");


describe("The countAllPaarl function ", function () {

  it("should returns 5 registration numbers in the string for Paarl", function () {


    assert.equal(5, countAllPaarl("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123, CJ 345 123, CK 345, CJ 123, 'CJ'"));

  });

  it("should return 6 registration numbers in the string for Paarl", function () {


    assert.equal(6, countAllPaarl("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123, CJ 345 123, CK 345, CJ 123, CL 124,CY 567,CL 345, CJ 456,CL 341','CL', 'CJ'"));
  });

  it("should return 6 registration numbers in the string for Paarl", function () {


    assert.equal(9, countAllPaarl("CJ 345 123, CJ 2345, CJ 123-546, CJ 345, CJ 123, CJ 345 123, CK 345, CJ 123, CJ 124,CY 567,CJ 345, CJ 456,CL 341','CL', 'CJ'"));
  });
});