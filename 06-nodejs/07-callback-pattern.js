function sum( x, y, cb ) {
    // non-blocking function (async)
    // function fn goes into event queue after 3 seconds
    setTimeout(
        // JS Event loop picks this function fn once it is in the queue and executes it
        function fn() {
            console.log( 'inside the actual sum calculation' );
            const result = x + y;
            cb( result );

            return result; // JS event loop gets the result
        },
        3000
    );
    
    // sum function continues execution without any delay
    console.log( 'after call to setTimeout' );

    // return undefined;
}

module.exports = sum;