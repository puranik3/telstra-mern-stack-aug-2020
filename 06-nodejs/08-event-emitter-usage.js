const sum = require( './08-event-emitter-pattern' );

function doSomethingWithResult( result ) {
    console.log( `result = ${result}` );
}

function doSomethingElseWithResult( result ) {
    console.log( `result = ${result * result}` );
}

let ee1 = sum( 12, 13 );
let ee2 = sum( 12, 13 );

ee1.on( 'SUM_CALCULATED', doSomethingWithResult );
ee1.on( 'DIFF_CALCULATED', doSomethingWithResult );

ee2.on( 'SUM_CALCULATED', doSomethingElseWithResult );
ee2.on( 'DIFF_CALCULATED', doSomethingElseWithResult );

console.log( 'end of ee usage script' );