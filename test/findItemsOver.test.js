let assert = require("assert");
let findItemsOver = require("../findItemsOver");


describe("the findItemsOver function", function () {

    it('should return all the products that have a quantity higher than 20', function () {

        var itemList = [
            {name : 'apples', qty : 23},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'grapes', qty : 13},
        ];
        
        var results = findItemsOver(itemList, 20)
        
        var results = [
            {name : 'apples', qty : 23},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            
            
        ];
        
        assert.deepEqual(findItemsOver(itemList,20), results);
    });
});
