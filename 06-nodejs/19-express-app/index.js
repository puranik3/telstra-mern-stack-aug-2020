const path = require( 'path' );
const express = require( 'express' );
const indexRouter = require( './routes/index' );
const productsRouter = require( './routes/products' );

// Express Application object
const app = express();

// we can set any key-value pairs on the application object
// configure the templating engine to ejs ('views' and 'view engine' keys have to be set)
app.set( 'views', path.join( __dirname, 'views' ) );
app.set( 'view engine', 'ejs' );

app.use( '/', ( req, res, next ) => {
    console.log( 'Received req at', (new Date()).toTimeString() );
    
    next();

    console.log( 'Response sent at', (new Date()).toTimeString() );
});

app.use( express.static( path.join( __dirname, 'public' ) ) );

app.use( indexRouter );
app.use( productsRouter );

const PORT = process.env.PORT || 3000;

app.listen( PORT, ( err ) => {
    if( err ) {
        return console.error( err.message );
    }

    return console.log( `server started at http://localhost:${PORT}/` );
});