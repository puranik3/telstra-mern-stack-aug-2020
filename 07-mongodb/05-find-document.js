// find (without any filter) gets all documents
db.person.find();

db.person.find().pretty();

// how to reference other document
// Mongo DB is schemaless
db.person.insertOne({
    name: 'Jane',
    age: 28,
    spouse: ObjectId( "5f4f39c199d5b6ad5814cc1c" )
});