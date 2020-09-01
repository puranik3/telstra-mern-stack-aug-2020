const path = require( 'path' );
const express = require( 'express' );
const indexRouter = require( './routes/index' );

// Express Application object
const app = express();

app.use( '/', ( req, res, next ) => {
    console.log( 'Received req at', (new Date()).toTimeString() );
    
    next();

    console.log( 'Response sent at', (new Date()).toTimeString() );
});

app.use( express.static( path.join( __dirname, 'public' ) ) );

app.use( indexRouter );

const PORT = process.env.PORT || 3000;

app.listen( PORT, ( err ) => {
    if( err ) {
        return console.error( err.message );
    }

    return console.log( `server started at http://localhost:${PORT}/` );
});