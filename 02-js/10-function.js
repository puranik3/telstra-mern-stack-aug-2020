// function declaration syntax
function sum1( x, y ) {
    return x + y;
}

console.log( sum1( 12, 13 ) );

// function expression syntax
const sum2 = function( x, y ) {
    return x + y;
};

console.log( sum2( 12, 13 ) );

// arrow function
const sum3 = ( x, y ) => {
    return x + y
};
console.log( sum3( 12, 13 ) );

// arrow function - single line and returns something
const sum4 = ( x, y ) => x + y;
console.log( sum4( 12, 13 ) );

// Exercise: create the square function using all 3 syntaxes
const square = x => x * x; // single argument does not require ( ) around it
console.log( square( 12 ) );