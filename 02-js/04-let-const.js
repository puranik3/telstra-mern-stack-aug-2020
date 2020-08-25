// let, const - similar in scope behavior

let x = 1;
// x++; // x -> 2
x = 2;
console.log( `x = ${x}` );

const y = 1;
// y++; // error
// y = 2; // error
console.log( `y = ${y}` );

// const z/* = 100*/; // error - missing initializer
// console.log( `z = ${z}` ); // what happens? error or does it print undefined????

// const means we cannot use assignment
const john = {
    name: 'John',
    age:32
};

// john = { // error - cannot assign to const
//     name: 'John',
//     age: 33
// };

john.age = john.age + 1; // ok - same object can be changed
console.log( john );

let x = {
    name: 'Jane',
    age: 28
};

const jane = x;

// jane and x are pointing to same object in memory