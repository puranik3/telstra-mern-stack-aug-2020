const express = require( 'express' );
const path = require( 'path' );

// read the JSON data with products etc.
const data = require( '../data/seed.json' );

const router = express.Router();

let nextId = 6;

router.get( '/products', ( req, res ) => {
    // req.query is an object with all query parameters and their value
    if( req.query.format === 'json' ){
        // convert data.products array to JSON string and send response
        res.json( data.products );
    } else {
        // the path is wrt views/ folder - the .ejs extension should not be given
        // when we pass an object to render() the object cannot be directly used in ejs file - but its properties can be used
        res.render( 'products', data );
    }
});

// :id marks this path fragment as a dynamic fragment
// this route shall match /products/1, /products/2, /products/anything...
router.get( '/products/:id', ( req, res ) => {
    // req.params is an object with all dynamic path fragments and their values
    const id = parseInt( req.params.id );

    // find the products in the array that has matching id
    const product = data.products.find( product => product.id === id );

    // return the product object after converting it to JSON format
    res.json( product );
});

// handle POST request to /products
router.post( '/products', ( req, res ) => {
    // req.body would have form data / JSON data parsed into an JS object - this is done by express.urlencoded() and express.json() middleware
    
    // create an object with product details and a unique id that we generate for it
    const product = {
        ...req.body,
        id: nextId
    };

    // add the new product to the data.products array
    data.products.push( product );

    // increment nextId in order to set the product id when next request comes in
    nextId++;

    // return the newly added product object (with generated id) after converting it to JSON format
    res.json( product );
});

module.exports = router;