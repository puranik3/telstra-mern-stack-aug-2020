// sub-object in the document is called an embedded document
db.person.insertOne({
    name: 'Jack',
    age: 2,
    numTeeth: {
        milk: 4,
        molar: 2
    }
});

// EXERCISE: Add a new document with some array type within the document - say, favoriteToys
db.person.insertOne({
    name: 'Jill',
    age: 4,
    toys: [ 'Remote control car', 'Barbie doll' ]
});

db.person.insertOne({
    name: 'Jill',
    age: 4,
    toys: [ 'Remote control car', 'Barbie doll' ]
});

db.person.insertOne({
    name: 'Joe',
    age: 4,
    toys: [ 
        { name: 'Remote control car', likes: 9 },
        { name: 'Barbie doll', likes: 5 }
    ]
});

// Exercise: check findOne() command on https://docs.mongodb.com/manual/ and use it to get document where name is John
db.person.findOne( { name: 'John' } );