var nameVar = 'Andrew';
var nameVar = 'Mika';
console.log('nameVar', nameVar);

let nameLet = 'Jen';  
nameLet = 'Julie';
console.log('nameLet', nameLet)

const nameConst = 'Frank';
// nameConst = 'Mika';
console.log('nameConst', nameConst);

function getPetName() {
    let petName = 'Lion';
    return petName;
}

const petName = getPetName();
console.log('petName', petName);


const fullName = 'Sakana Sensei';
let firstName;
if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log('firstName(in if)', firstName);
}

console.log('firstName(out if)',firstName);