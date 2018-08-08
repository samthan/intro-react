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
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person   {
    constructor(name, age, major)    {
        super(name, age);
        this.major = major;
    }

    hasMajor()  {
        return !!this.major;
    }

    getDescription()    {
        let description = super.getDescription();

        if (this.major) {
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

class Traveler extends Person   {
    constructor(name, age, homeLocation)    {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting()   {
        let greeting = super.getGreeting();

        if (this.homeLocation)  {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }

        return greeting;
    }
}

const me = new Traveler('Samuel Han', 23, 'San Jose');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
