const express = require( 'express' );
const indexRouter = require( './routes/index' );

// Express Application object
const app = express();

app.use( indexRouter );

const PORT = process.env.PORT || 3000;

app.listen( PORT, ( err ) => {
    if( err ) {
        return console.error( err.message );
    }

    return console.log( `server started at http://localhost:${PORT}/` );
});