// CommonJS module system - not ES2015 system
const http = require( 'http' );
const url = require( 'url' );

// the function passed is a "callback" function
const server = http.createServer(( req, res ) => {
    console.log( req.url );
    
    // 2nd argument true -> parses the query string
    const parsedUrl = url.parse( req.url, true )
    const queryParams = parsedUrl.query;
    
    res.write( `hello ${queryParams.name}\n` );
    res.write( `how is the weather in ${queryParams.city}\n` );
    res.end( `have a great day. bye..` );
});

const PORT = 3000; // anything above 1024 is ok (80 is for web server for HTTP requests)

server.listen( PORT, ( err ) => {
    if( err ) {
        console.log( 'Something went wrong starting the server; err = ', err.message );
        return;
    }

    console.log( `server started at http://localhost:${PORT}` );
});