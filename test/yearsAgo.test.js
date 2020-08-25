let assert = require("assert");
let yearsAgo = require("../yearsAgo");


describe("The transportFee function ", function(){
  
    it ("should count how many years 2010 was", function() {
    

assert.equal (10, yearsAgo("2010"));
});
   it ("should count how many years ago 2015 was", function() {


assert.equal (5, yearsAgo("2015"));
});

  it ("should count how many years ago 2003 was", function() {


assert.equal(17,yearsAgo (2003));
});
       
}); 

