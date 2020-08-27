// return type is implicitly defined as number
// TS has guessed that only number can possibly be returned
function sum( x : number, y : number ) {
    return x + y;
}

let result = sum( 1, 2 ); // result is type-defined as a number
result = 'hello'; // cannot assign a string

// explicitly typing the return value
function diff( x : number, y : number ) : number {
    return x - y;
}

const multiply = function( x : number, y : number ) /*: number */ {
    return x * y;
};

const divide = ( x : number, y : number ) /*: number */ => x * y;

export {}