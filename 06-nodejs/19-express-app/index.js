const express = require( 'express' );
const indexRouter = require( './routes/index' );

// Express Application object
const app = express();

// this middleware function is called for any GET request
// app.use( route ) -> the route is matched if a prefix of he URL matches the route
app.use( '/', ( req, res, next ) => {
    console.log( 'Received req at', (new Date()).toTimeString() );
    
    console.log( 'fn 1' );
    // control transferred to next midlleware
    next();

    // when response goes out this is where the function resumes
    console.log( 'Response sent at', (new Date()).toTimeString() );
});

app.use( indexRouter );

const PORT = process.env.PORT || 3000;

app.listen( PORT, ( err ) => {
    if( err ) {
        return console.error( err.message );
    }

    return console.log( `server started at http://localhost:${PORT}/` );
});