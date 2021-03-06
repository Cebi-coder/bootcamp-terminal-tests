let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");


describe("the findItemsOver20 function", function () {

    it('should return all the products that have a quantity higher than 20', function () {

        var itemList = [
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 },
            { name: 'apples', qty: 3 },
        ];
        var results = [
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 },
        ];


        assert.deepEqual(findItemsOver20(itemList, 20), results);
    });
    it('should return all the products that have a quantity higher than 20', function () {

        var itemList = [
            { "name": "pears", "qty": 37 },
            { "name": "pears", "qty": 37 },
            { "name": "bananas", "qty": 27 },
            { "name": "apples", "qty": 40 },
            { "name": "apples", "qty": 40 },
            { "name": "bananas", "qty": 23 },
            { "name": "apples", "qty": 40 },
            { "name": "bananas", "qty": 23 },
            { "name": "apples", "qty": 37 },
        ];
        var results = [

            { "name": "pears", "qty": 37 },
            { "name": "pears", "qty": 37 },
            { "name": "bananas", "qty": 27 },
            { "name": "apples", "qty": 40 },
            { "name": "apples", "qty": 40 },
            { "name": "bananas", "qty": 23 },
            { "name": "apples", "qty": 40 },
            { "name": "bananas", "qty": 23 },
            { "name": "apples", "qty": 37 },


        ];

        assert.deepEqual(findItemsOver20(itemList, 20), results);
    });

    it('should return all the products that have a quantity higher than 20', function () {

        var itemList = [
            { "name": "pears", "qty": 16 },
            { "name": "pears", "qty": 12 },
            { "name": "bananas", "qty": 27 },
            { "name": "apples", "qty": 40 },
            { "name": "apples", "qty": 35 },
            { "name": "bananas", "qty": 23 },
            { "name": "apples", "qty": 19 },
            { "name": "bananas", "qty": 23 },
            { "name": "apples", "qty": 37 },
        ];
        var results = [
            { "name": "bananas", "qty": 27 },
            { "name": "apples", "qty": 40 },
            { "name": "apples", "qty": 40 },
            { "name": "bananas", "qty": 23 },
            { "name": "bananas", "qty": 23 },
            { "name": "apples", "qty": 37 },
        ];
    });
});
