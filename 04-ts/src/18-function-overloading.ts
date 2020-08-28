// permitted signatures for sum
function sum( x : number, y : number ) : number;
function sum( x : string, y : string ) : string;

// definition for sum
function sum( x : number | string, y : number | string ) {
    console.log( arguments.length ); // number of arguments actually passed to a function
    console.log( arguments[0] ); // first argument

    if( typeof x == 'number' && typeof y == 'number' ) { // type refinement
        return x + y;
    }
    
    if( typeof x == 'string' && typeof y == 'string' ) { // type refinement
        return x + y;
    }

    // return undefined;
}

let result : number | string;
result = sum( 12, 13 );
result = sum( 'hello', 'world' );
result = sum( 12, 'hello' );