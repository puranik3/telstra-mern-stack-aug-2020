// remove jane
db.person.deleteOne( { "_id" : ObjectId("5f4f3c2f99d5b6ad5814cc1d") } );

// check number of documents remaining (both give count)
db.person.find().count();
db.person.count();