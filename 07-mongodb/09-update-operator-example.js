// change John's name
// db.collection.updateOne( filterDoc, updateDoc )

// $operator - example, $set (update operator)
filterDoc2 = { name: 'John' };
updateDoc2 = {
    $set: {
        name: 'Jonathan'
    }
};

db.person.updateOne( filterDoc2, updateDoc2 );