// another syntax for defining types for functions using expression / arrow function syntax

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