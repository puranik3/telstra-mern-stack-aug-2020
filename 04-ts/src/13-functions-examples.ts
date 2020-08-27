// another syntax for defining types for functions using expression / arrow function syntax

type BinaryOperation = ( x : number, y : number ) => number;

const multiply : ( x : number, y : number ) => number = function( x, y ) {
    return x * y;
};

const divide : BinaryOperation = ( x, y ) => x * y;

function contains1( arr : number[], key : number ) : boolean {
    for( let i = 0; i < arr.length; i++ ) {
        if( arr[i] == key ) {
            return true;
        }
    }

    return false;
}

type ArraySearchFn = ( arr : number[], key : number ) => boolean;

const contains2 : ArraySearchFn = ( arr, key ) => {
    for( let i = 0; i < arr.length; i++ ) {
        if( arr[i] == key ) {
            return true;
        }
    }

    return false;
}

export {}

contains1( [ 1, 2, 3, 4, 5, 6 ], 4 );