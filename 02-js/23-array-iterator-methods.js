const numbers = [ 2, 3, 5, 7, 11, 13 ];

numbers.forEach(function( item, idx ) {
    console.log( item, idx );
});

const numbersSquared = numbers.map( ( item, idx ) => item * item );
console.log( numbersSquared );

const odds = numbers.filter( ( item, idx ) => item % 2 === 1 );
console.log( odds );

