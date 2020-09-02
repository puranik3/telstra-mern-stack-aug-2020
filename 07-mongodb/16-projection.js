// why select certain fields?
// - limit fields to save memory and bandwidth
// - authorized to view certain fields - fetch only those fields

// SELECT x, y, z
// do we see only price in the documents or do we see more???
// _id is present in our data by default
db.testData.find(
    { }, // find everything (you can give proper fields if you want to filter)
    {
        price: 1,
    }
);

// be explicit when you do not require the _id too
db.testData.find(
    { }, // means filter nothing
    {
        price: 1,
        _id: 0
    }
);