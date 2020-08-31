// CommonJS module system - not ES2015 system
const http = require( 'http' );
const url = require( 'url' );

// the function passed is a "callback" function
const server = http.createServer(( req, res ) => {
    console.log( req.url );
    
    // 2nd argument true -> parses the query string
    const parsedUrl = url.parse( req.url, true )

    const pathParts = parsedUrl.pathname.split( '/' ).slice( 1 );
    console.log( pathParts );
    
    res.write( `path param 1 = ${pathParts[0]}\n` );
    res.write( `path param 2 = ${pathParts[1]}\n` );
    res.write( `path param 3 = ${pathParts[2]}\n` );

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