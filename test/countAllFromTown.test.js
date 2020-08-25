let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");


describe("The countAllFromTown function ", function () {

  it("should return number registration numbers in the string that is for that town.", function () {
    assert.equal(3, countAllFromTown("CL 124, CY 567, CL 345, CJ 456, CL 341", 'CL'))
    assert.equal(3, countAllFromTown("CJ 67890, CJ 67890, CJ 67890, CL 341", "CJ"));
    assert.equal(2, countAllFromTown("CJ 67890, CA 1234, CA 1234", "CA"));

  });

});

