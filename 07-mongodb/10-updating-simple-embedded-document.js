// this will result in loss of milk teeth
// the exiting embedded document is replaced with a new embedded
db.person.updateOne(
    { "_id" : ObjectId("5f4f3d2499d5b6ad5814cc1e") },
    {
        $set: {
            numTeeth: {
                molar: 6
            }
        }
    }
);

// updating fields in embedded documents (use the . operator to reach the field - make sure to enclose within quotes - "numTeeth.milk")
db.person.updateOne(
    { "_id" : ObjectId("5f4f3d2499d5b6ad5814cc1e") },
    {
        $set: {
            "numTeeth.milk": 5
        }
    }
);
