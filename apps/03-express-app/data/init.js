const mongoose = require('mongoose');

mongoose.set( 'useFindAndModify', false );
mongoose.set('returnOriginal', false);

// create models
require( '../models/Product' );

mongoose.connect( 'mongodb://mongodb/mystore', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.on( 'error', ( err ) => {
    console.error.bind( console, 'connection error:', err.message );
    process.exit( 0 );
});

connection.on('open', function() {
  console.log( 'connected to mongodb database' );
});

// module.exports = connection;