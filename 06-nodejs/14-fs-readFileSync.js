const path = require( 'path' );
const fs = require( 'fs' );

const seedFilePath = path.join( __dirname, 'seed.json' );

// blocking read - NOT preferred - rest of code after this line does not execute till file is read
try {
    const contents = fs.readFileSync( seedFilePath, 'utf8' );
    console.log( contents );

    // throw is also there - you can throw errors
} catch( err ) {
    console.error( err.message );
} // finally is also there

console.log( '*** end of script ***' );
