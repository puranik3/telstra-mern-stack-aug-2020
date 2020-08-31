const arithmetic = require( './arithmetic' );

// arithmetic module exports is cached

// second include - will not execute the module
const arithmetic2 = require( './arithmetic' );

console.log( arithmetic.sum( 12, 13 ) );
console.log( arithmetic2.multiply( 12, 13 ) );
console.log( arithmetic.areaOfCircle( 12 ) );
console.log( arithmetic.PI ); // undefined