let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");


describe("The countAllPaarl function ", function () {

  it("should returns the number of registration numbers in the string for Paarl", function () {

    
    assert.equal(5, countAllPaarl("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123, CJ 345 123, CK 345, CJ 123, 'CJ'"));
    
  });

});