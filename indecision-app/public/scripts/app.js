'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound
var user = {
    name: 'Samuel',
    cities: ['San Jose', 'Ann Arbor', 'Kalamazoo'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city + '.';
        });

        // const cityMessages = this.cities.map((city) =>   {
        //     return this.name + ' has lived in ' + city + '.';
        // });

        // cityMessages.forEach((city) => {
        //     console.log(city);
        // });
    }
};
console.log(user.printPlacesLived());

// Challenge
// numbers - array of numbers
// multiply By - single number
// multiply - return a new array where the numbers have been multiplied

var multiplier = {
    multiplyBy: 3,
    numbers: [10, 20, 30],
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return _this2.multiplyBy * number;
        });
    }
};

console.log(multiplier.multiply());
