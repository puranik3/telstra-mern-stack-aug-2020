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
    console.log( req.method );
    console.log( req.url );

    const parsedUrl = url.parse( req.url );

    if( req.url === '/' ) {
        serveFile( path.join( __dirname, 'form.html' ), req, res );
        return;
    }

    console.log( parsedUrl.pathname );
    console.log( req.method.toLowerCase() );

    if( parsedUrl.pathname === '/login' && req.method.toLowerCase() === 'post' ) {
        fs.writeFile( path.join( __dirname, 'login.log' ), 'somebody tried to log', { encoding: 'utf8' }, ( err ) => {
            if( err ) {
                return res.end( err.message );
            }
            res.end( 'data has been captured' );
        });
        return;
    }

    res.end( `You called with HTTP method ${req.method}` );
});

const PORT = 3000;

server.listen( PORT, ( err ) => {
    if( err ) {
        console.log( 'Something went wrong starting the server; err = ', err.message );
        return;
    }

    console.log( `server started at http://localhost:${PORT}` );
});