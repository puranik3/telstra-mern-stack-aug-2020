// function contains( arr : number[], key : number ) : boolean;
// function contains( arr : string[], key : string ) : boolean;
// function contains( arr : boolean[], key : boolean ) : boolean;

// generic function / parametrized function
function contains<T1 /*, T2, T3*/>( arr : T1[], key : T1 ) {
    for( let i = 0; i < arr.length; i++ ) {
        if( arr[i] === key ) {
            return true;
        }
    }

    return false;
}

contains<number>( [ 1, 2, 3, 4, 5 ], 3 );
contains<string>( [ 'hello', 'world', 'how', 'is', 'your', 'day' ], 'world' );

export {}