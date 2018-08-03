// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound
const user = {
    name: 'Samuel',
    cities: ['San Jose', 'Ann Arbor', 'Kalamazoo'],
    printPlacesLived()    {
        return this.cities.map((city) => this.name + ' has lived in ' + city + '.');

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

const multiplier = {
    multiplyBy: 3,
    numbers: [10, 20, 30],
    multiply()  {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());