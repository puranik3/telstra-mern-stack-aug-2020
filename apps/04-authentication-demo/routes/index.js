var express = require('express');
const jwt = require( 'jsonwebtoken' );
var router = express.Router();

let users = [
    {
        username: 'u1',
        password: 'p1'
    },{
        username: 'u2',
        password: 'p2'
    },{
        username: 'u3',
        password: 'p3'
    }
];

router.get( "/", function( req, res, next ) {
    console.log( 'home page' );
    res.render( 'login' );
});

function getUser(username,password) {
    return users.find((eachUserInDB)=> {
        return eachUserInDB.username === username && eachUserInDB.password === password
    });
}

router.post('/login', (req, res, next) => {
    if(!req.body.username && !req.body.password) {
        const err = new Error('USERNAME/PASSWORD/BOTH missing in /login POST request '); 
        err.status = 403
        return next( err )
    }
        let username = req.body.username
        let password = req.body.password
        const user = getUser(username, password) //define somewhereelse
        if(!user) {  return res.status(403).json({message: 'Login failed! User credentials not matched.'})  }
        const claims = {   username: username   }
        
        jwt.sign(claims, 'shh...', {expiresIn: '24h'}, function(error, token) {
            if(error) return res.status(401).json({ message: error.message })
            res.status(200).json({
                message: 'Signed in sucessfully',
                token: token,
                username: username
            })
        });
})

router.get( '/secret_endpoint', function( req, res ) {
    const token = req.header( 'Authorization' );
    console.log( token );

    if( !token ) {
        return res.status( 403 ).json({
            message: 'Toke is not sent'
        });
    }

    jwt.verify(token, 'shh...', function(err, claims) {
        if( err ) {
            return res.status( 403 ).json({
                message: 'Go away intruder'
            });
        }
        
        res.send({
            message: 'Today is Monday'
        });
    });
});

module.exports = router;
