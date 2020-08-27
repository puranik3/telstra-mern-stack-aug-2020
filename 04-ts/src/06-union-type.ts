// can assign set of all number values U set of all string values
let x : number | string = 1; 
x = 2;
x = 'hello';
x = true; // error -> can assign only number or string values

let numbers : (number | string)[] = [ 1, 2, 3 ];
numbers.push( 'Four' );
numbers.push( true ); // item must be either number or string - we cannot add a boolean to this array

let nums : number | string[] = [ 'hello', 'world' ];
nums.push( 1 ); // error
nums = 1;

let arr : number[] | string[] = [ 1, 2, 3 ];
arr = [ 'hello', 'world' ];

let y : number | string[] = [ "4" ];
y.push( "hello" );

export {}