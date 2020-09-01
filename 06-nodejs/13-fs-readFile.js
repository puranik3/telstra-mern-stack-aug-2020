const path = require( 'path' );
const fs = require( 'fs' );

const seedFilePath = path.join( __dirname, 'seed.json' );

// async method - non-blocking
fs.readFile( seedFilePath, 'utf8', ( err, contents ) => {
    if( err ) {
        return console.error( err.message );
    }

    // JSON contents as a string
    console.log( contents );
});

console.log( '*** end of script ***' );