let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");


describe("The countAllFromTown function ", function () {

  it("should return number registration numbers in the string that is for that town.", function () {
    assert.equal(3, countAllFromTown("CL 124, CY 567, CL 345, CJ 456, CL 341", 'CL'))
    assert.equal(3, countAllFromTown("CJ 67890, CJ 67890, CJ 67890, CL 341", "CJ"));
    assert.equal(2, countAllFromTown("CJ 67890, CA 1234, CA 1234", "CA"));

  });
  it("should return 1 for CJ, 1 for CL and 2 for CA", function (){
  assert.equal(1, countAllFromTown("CL 124, CY 567, CL 345, CJ 456, CL 341", 'CJ'))
  assert.equal(1, countAllFromTown("CJ 67890, CJ 67890, CJ 67890, CL 341", "CL"));
  assert.equal(2, countAllFromTown("CJ 67890, CA 1234, CA 1234", "CA"));

});
it("should return 0 for CF, 1 for CL and 2 for CA", function (){
  assert.equal(0, countAllFromTown("CL 124,CY 567,CL 345, CJ 456,CL 341','CF'"))
  assert.equal(1, countAllFromTown("CJ 67890, CJ 67890, CJ 67890, CL 341", "CL"));
  assert.equal(2, countAllFromTown("CJ 67890, CA 1234, CA 1234", "CA"));

});
});
