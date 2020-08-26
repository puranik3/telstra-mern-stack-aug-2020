function sumArray( arr, transform ) {
    let sum = 0;
    for( let i = 0; i < arr.length; i++ ) {
        sum += transform( arr[i] )
    }
    return sum;
}

function square( x ) {
    return x * x;
}

console.log( sumArray( [ 1, 2, 3 ], square ) ); // prints 14