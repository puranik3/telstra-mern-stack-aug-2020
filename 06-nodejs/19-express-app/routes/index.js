const express = require( 'express' );

const router = express.Router();

// req, res are enhanced Node.js objects for request and response
// router object has same routing functions that application object has
router.get( '/', ( req, res ) => {
    res.send( 'Hello Express!' );
});

module.exports = router;