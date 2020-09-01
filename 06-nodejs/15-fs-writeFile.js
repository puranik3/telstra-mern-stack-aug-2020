const path = require( 'path' );
const fs = require( 'fs' );

const filename = path.join( __dirname, 'family.json' );

const family = [
    {
        name: 'john',
        age: 32
    },
    {
        name: 'jane',
        age: 28
    }
];

fs.writeFile( filename, JSON.stringify( family, null, 4 ), { encoding: 'utf8' }, ( err ) => {
    if( err ) {
        console.log( err.message );
        return;
    }

    console.log( `family.json  was successfully written` );
});