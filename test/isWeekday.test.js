let assert = require("assert");
let isWeekday = require("../isWeekday");


describe("The isWeekday function ", function(){
  
    it ("should say that Monday is a weekday", function() {
        
var weekday = 'Monday' 
        assert.equal(true,isWeekday("Monday"));
    });
  
    it ("should say that Friday is a weekday", function() {
        var weekday = 'Friday' 
        assert.equal(true, isWeekday('Friday'));
    });
    
    it ("should say that Saturday is not weekday", function() {
        var notWeekday = 'Saturday' 
        assert.equal(false, isWeekday('Saturday'));
    });
  
    it ("should say that Sunday is not weekday", function() {
        
        var notWeeday = 'Sunday' 
        assert.equal(false,isWeekday('Sunday'));
    });
    
  
    
});

