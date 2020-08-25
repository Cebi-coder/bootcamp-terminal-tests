let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");


describe("calculate totalPhoneBill function", function () {

it('should be able to return the call cost when the call string is entered', function () {


    assert.equal("R6.15", totalPhoneBill("call,call,sms"));

});

it("should be able to set the sms amount when the string sms is entered", function () {

    assert.equal("R0.65", totalPhoneBill("sms"));
});
it("should be able to add both sms and call cost to total", function () {

    assert.equal("R3.40", totalPhoneBill("call,sms"));
});
});
