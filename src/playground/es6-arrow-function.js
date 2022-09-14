// // normal function
// const square = function(x) {
//     return x * x;
// };

// // const squareArrow = (x) => {
// //     return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(4));
const getFirstNameLong = (x) => {
    return x.split(' ')[0];
}

const getFirstName = (x) => x.split(' ')[0];


const fullName = 'Sakana Sensei';
console.log('first name is:',getFirstName(fullName));