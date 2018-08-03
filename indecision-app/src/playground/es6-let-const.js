let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst)

function getPetName()   {
    var petName = 'Hal';
    return petName;
}

var petName = getPetName();
console.log(petName);

// Block scoping
const fullName = 'Samuel Han';
let firstName;
if (fullName)   {
    firstName = fullName.split(' ')[0];
    console.log(firstName);

}

console.log(firstName);