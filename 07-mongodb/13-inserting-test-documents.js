// insert 1000 documents that are randomly generated
for( let i = 0; i < 1000; i++ ) {
    db.testData.insertOne(
        {
            name: 'company ' + i,
            price: parseInt( Math.random() * 1000 )
        }
    );
}