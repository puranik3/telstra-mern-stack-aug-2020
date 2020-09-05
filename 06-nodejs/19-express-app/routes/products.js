const express = require( 'express' );
const path = require( 'path' );

const mongoose = require( 'mongoose' );
const Product = mongoose.model( 'Product' );

const router = express.Router();

router.get( '/', ( req, res ) => {
    Product
        .find()
        .exec(( err, results ) => {
            if( err ) {
                // keeping things simple we will send the backend error to the frontend - not a good idea usually
                res.status( 500 ).json({
                    message: err.message
                });
            }

            res.status( 200 ).json( results );
        });
});

router.get( '/:id', ( req, res ) => {
    res.send( 'I will send products' );
});

router.post( '/', ( req, res ) => {
    res.send( 'I will send products' );
});

router.put( '/:id', ( req, res ) => {
    res.send( 'I will send products' );
});

router.delete( '/:id', ( req, res ) => {
    res.send( 'I will send products' );
});

module.exports = router;