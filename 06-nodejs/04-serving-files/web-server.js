const http = require( 'http' );
const url = require( 'url' );
const path = require( 'path' );
const fs = require( 'fs' );

const server = http.createServer(( req, res ) => {
    console.log( req.url );
    
    const parsedUrl = url.parse( req.url, true );
    console.log( __dirname );

    switch( parsedUrl.pathname ) {
        case '/about':
            const aboutPath = path.join( __dirname, 'public', 'about.html' );
            fs.readFile( aboutPath, 'utf8', ( err, contents ) => {
                if( err ) {
                    res.statusCode = 500;
                    return res.end( err.message );
                }

                res.setHeader( 'Content-Type', 'text/html' );
                res.end( contents ); // status is set by default to 200
            });
            break;
        default:
            res.end( `have a great day. bye..` );
    }
});

const PORT = 3000;

server.listen( PORT, ( err ) => {
    if( err ) {
        console.log( 'Something went wrong starting the server; err = ', err.message );
        return;
    }

    console.log( `server started at http://localhost:${PORT}` );
});