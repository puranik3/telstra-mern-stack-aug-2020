// let, const - similar in scope behavior

let x = 1;
// x++; // x -> 2
x = 2;
console.log( `x = ${x}` );

const y = 1;
// y++; // error
// y = 2; // error
console.log( `y = ${y}` );

const z/* = 100*/; // error - missing initializer
console.log( `z = ${z}` ); // what happens? error or does it print undefined????