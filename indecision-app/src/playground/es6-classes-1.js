console.log('es6-classes-1.js is running!')

// Challenge
// Setup constructor to take name and age (default = 0)
// getDescription - return string - {Name} is {age} years old.

class Person    {
    constructor(name = 'Anonymous', age = 0)   {
        this.name = name;
        this.age = age;
    }

    getGreeting()   {
        // template string
        return `Hi. I am ${this.name}!`;
    }

    getDescription()    {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

const me = new Person('Samuel Han', 23);
// console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Person();
// console.log(other.getGreeting());
console.log(other.getDescription());