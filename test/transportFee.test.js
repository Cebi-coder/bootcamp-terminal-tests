let assert = require("assert");
let transportFee = require("../transportFee");


describe("The transportFee function ", function(){
  
    it ("should return R20 for morning shift", function() {
    var morning = 'R20'

assert.equal ('R20', transportFee ("morning"));
});
   it ("should return R10 for afternoon shift", function() {
var afternoon = 'R10'

assert.equal ('R10', transportFee ("afternoon"));
});

  it ("should return free for nightshift", function() {
var nightshift = 'free'

assert.equal('free',transportFee ("nightshift"));
});
       
}); 

