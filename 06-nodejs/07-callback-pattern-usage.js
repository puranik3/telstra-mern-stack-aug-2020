const sum = require( './07-callback-pattern' );

function doSomethingWithResult( result ) {
    console.log( `result = ${result}` );
}

// console.log( sum( 12, 13 ) );
console.log( sum( 12, 13, doSomethingWithResult ) );

console.log( 'after exit of sum() function' );
