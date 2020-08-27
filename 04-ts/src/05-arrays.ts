// implicitly typed by the data type of the items
let days = [ 'Sunday', 'Monday' ];

let numbers : number[] = [];
numbers[0] = 1;
numbers[1] = 'hello'; // error - item must be number

// TS is very intelligent - it knows the data types of all JS functions - their arguments and return values
numbers.push( 'world' );

// try out some other function of array
numbers.includes( 5 );

export {}