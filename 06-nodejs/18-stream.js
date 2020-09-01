const fs = require( 'fs' );
const path = require( 'path' );

// Readable, Writable and Transform stream - 3 main kinds of streams

// stream objects are event emitters
const stream = fs.createWriteStream( path.join( 'hello-stream.txt' ) );

// explore events emitted by streams

stream.write( 'Hello world' );
stream.write( 'How are you doing today?' );
stream.end( 'That is all folks' );

// response object of http server is a writable stream
// request object is a readable stream