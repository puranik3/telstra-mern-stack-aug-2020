// CommonJS module system - not ES2015 system
const http = require( 'http' );

// the function passed is a "callback" function
const server = http.createServer(( req, res ) => {
    res.write( 'hello world' );
    res.write( 'how are you doing today' );
    res.end( 'that\'s all folks!' );
});

const PORT = 3000; // anything above 1024 is ok (80 is for web server for HTTP requests)

server.listen( PORT, ( err ) => {
    if( err ) {
        console.log( 'Something went wrong starting the server; err = ', err.message );
        return;
    }

    console.log( `server started at http://localhost:${PORT}` );
});