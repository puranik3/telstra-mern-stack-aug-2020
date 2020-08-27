type TransformFn = ( x : number ) => number;

function sumArray( arr : number[], transform : TransformFn ) {
    let sum = 0;

    for( let i = 0; i < arr.length; i++ ) {
        sum += transform( arr[i] );
    }

    return sum;
}

const square : TransformFn = x => x * x;
const cube : TransformFn = x => x * x * x;

sumArray( [ 1, 2, 3, 4, 5 ], square );
sumArray( [ 1, 2, 3, 4, 5 ], ( x : number ) => x );