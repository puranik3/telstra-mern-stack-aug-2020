const mongoose = require('mongoose');

// create models
require( '../models/Product' );

mongoose.connect( 'mongodb://localhost/mystore', { useNewUrlParser: true } );

const connection = mongoose.connection;

connection.on( 'error', console.error.bind( console, 'connection error:') );

connection.on('open', function() {
  console.log( 'connected to mongodb database' );
});

// module.exports = connection;