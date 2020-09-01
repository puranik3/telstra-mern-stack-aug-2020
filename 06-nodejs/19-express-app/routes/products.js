const express = require( 'express' );
const path = require( 'path' );

// read the JSON data with products etc.
const data = require( '../data/seed.json' );

const router = express.Router();

router.get( '/products', ( req, res ) => {
    // the path is wrt views/ folder - the .ejs extension should not be given
    res.render( 'products', data );
});

module.exports = router;