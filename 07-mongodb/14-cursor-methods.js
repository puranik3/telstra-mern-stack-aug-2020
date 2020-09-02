// cursor methods
// we get a cursor
const cursor = db.testData.find();

// Methods of cursor
// skip(), limit(), sort(), forEach(), count(), toArray(), hasNext(), next()
const isPresent = cursor.hasNext(); // is there a next document?
if( isPresent ) {
    cursor.next();
}

// number of documents in the result
cursor.count();

// iterating using forEach()
cursor.forEach( doc => printjson( doc ) );

// convert cursor to an array of documents
cursor2 = db.testData.find();
cursor2.toArray();

// skip 0 documents from the start and return 20 documents
// skip() / limit() needs to be on a fresh query
const cursor3 = db.testData.find();
cursor3.skip( 80 ).limit( 20 );
// cursor3.next();

// sort (pass a document with fields with values 1/-1)
db.testData.find().sort( { price: 1, name: -1 } );