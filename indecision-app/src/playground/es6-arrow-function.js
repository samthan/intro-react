// function square(x)   {
//     return x * x;
// };

// console.log(square(3));

// // const squareArrow = (x) => {
// //     return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(9));

// Challenge - Use arrow functions
// getFirstName('Mike Smith') -> 'Mike'
// Create regular, verbose version
// Create arrow function using shorthand syntax

const verboseGetFullName = (fullName) =>    {
    return fullName.split(' ')[0];
}
const getFullName = (fullName) => fullName.split(' ')[0];

console.log(verboseGetFullName('Mariah Carey'));
console.log(getFullName('John Appleseed'));
