const http = require( 'http' );
const url = require( 'url' );
const path = require( 'path' );
const fs = require( 'fs' );

function serveFile( filePath, req, res ) {
    fs.readFile( filePath, 'utf8', ( err, contents ) => {
        if( err ) {
            res.statusCode = 500;
            return res.end( err.message );
        }

        // res.setHeader( 'Content-Type', 'text/html' );
        res.end( contents ); // status is set by default to 200
    });
}

const server = http.createServer(( req, res ) => {
    console.log( req.url );
    
    const parsedUrl = url.parse( req.url, true );
    console.log( __dirname );

    let filePath;

    switch( parsedUrl.pathname ) {
        case '/about':
            filePath = path.join( __dirname, 'public', 'about.html' );
            serveFile( filePath, req, res );
            break;
        case '/home':
            filePath = path.join( __dirname, 'public', 'home.html' );
            serveFile( filePath, req, res );
            break;
        case '/contact':
            filePath = path.join( __dirname, 'public', 'contact.html' );
            serveFile( filePath, req, res );
            break;
        default:
            filePath = path.join( __dirname, 'public', parsedUrl.pathname );
            serveFile( filePath, req, res );
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