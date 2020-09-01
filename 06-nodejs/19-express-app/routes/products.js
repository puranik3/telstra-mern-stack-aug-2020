const express = require( 'express' );
const path = require( 'path' );

// read the JSON data with products etc.
const data = require( '../data/seed.json' );

const router = express.Router();

router.get( '/products', ( req, res ) => {
    if( req.query.format === 'json' ){
        res.json( data.products );
    } else {
        // the path is wrt views/ folder - the .ejs extension should not be given
        res.render( 'products', data );
    }
});

router.get( '/products/:id', ( req, res ) => {
    const id = parseInt( req.params.id );

    const product = data.products.find( product => product.id === id );

    res.json( product );
});

router.post( '/products', ( req, res ) => {
    console.log( req.body );
    res.json( req.body );
});

module.exports = router;