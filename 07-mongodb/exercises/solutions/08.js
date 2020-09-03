// Find all shows that are in English and have network -> country code as US, and set the language as English (US) instead. Also add a new field locale and set it to "en-US"
db.shows.updateMany(
    {
        "network.country.code": "US"
    },
    {
        $set: {
            language: 'English (US)',
            locale: 'en-US'
        }
    }
);

// Find the first show that has a weight of less than 40 and rating more than 7 and increase weight by 10. Also set a new field “criticsChoice” to true.
db.shows.findOne(
    {
        weight: { $lt: 40 },
        "rating.average": { $gt: 7 }
    }
);

db.shows.updateOne(
    {
        weight: { $lt: 40 },
        "rating.average": { $gt: 7 }
    },
    {
        $inc: {
            weight: 10
        },
        $set: {
            criticsChoice: true
        }
    }
);

// Find the first show that has a weight of more than 80 and rating less than 6 and decrease weight by 10. Also set a new field “criticsChoice” to false. We use $inc with -ve value to decrement.
// -- Exercise --


// Find all shows that have a weight between 40 - 60 and rating more 7 and increase weight to maximum( 50, current value )
db.shows.updateMany(
    {
        weight: { $gt: 40, $lt: 60 },
        "rating.average": { $gt: 7 }
    },
    {
        $max: {
            weight: 50
        }
    }
);

// EXERCISE - Find all shows that have a weight of less than 60 and rating more 8 and multiply the weight by 1.333333
db.shows.updateMany(
    {
        weight: { $lt: 60 },
        "rating.average": { $gt: 8 }
    },
    {
        $mul: {
            weight: NumberDecimal( 1.3333333 )
        }
    }
);

// EXERCISE - Rename criticsChoice field as cc in all documents ($rename)
db.shows.updateMany(
    { },
    {
        $rename: {
            criticsChoice: "cc"
        }
    }
);

// Removefieldcc(criticsChoice)fromalldocuments
db.shows.updateMany(
    { },
    {
        $unset: {
            cc: 1
        }
    }
);

// Try finding a document with a show name that does not exist (also use language: “English” while finding). Set the rating and genres for it. Use the upsert option and check that the upserted documented has fields that are part of the filter clause, as well as the update clause.
db.shows.findOne(
    {
        language: 'English',
        name: {
            $exists: false
        }
    }
);

// the new document created in case insert happens will have fields form both filter and update clauses
db.shows.updateMany(
    {
        language: 'English',
        name: 'Small Wonder'
    },
    {
        $set: {
            "rating.average": 8,
            genres: [ 'Comedy' ]
        }
    },
    {
        upsert: true
    }
);

// Update all shows that have a scheduled screening on “Monday”, and replace the item “Monday” with “monday” (lowercase). Hint: Use $ operator ($ refers to the item in the array that matched the filter criteria)
db.shows.updateMany(
    {
        "schedule.days": 'Monday'
    },
    {
        $set: {
            "schedule.days.$": "monday"
        }
    }
);

// what if multiple values are matched in filter clause? what will $ refer to - will it update all or one of it? how is the one chosen?
db.shows.updateMany(
    {
        "schedule.days": {
            $in: [ 'monday', 'Thursday' ]
        }
    },
    {
        $set: {
            "schedule.days.$": "holiday"
        }
    }
);

// Update all shows with genre “Horror” by adding another genre “Supernatural”
db.shows.updateMany(
    {
        genres: "Horror"
    },
    {
        $push: {
            genres: "Supernatural"
        }
    }
)

// Update all shows with genre “Horror” by adding 2 other genres “Supernatural” and “Spook” (you will need to use $each). Also explore how $sort and $slice can be used in this case.
db.shows.updateMany(
    {
        genres: "Horror"
    },
    {
        $push: {
            genres: {
                $each: [ 'Supernatural', 'Spook' ],
                $sort: 1
            }
        }
    }
)

// EXERCISE: Remove the genre Supernatural from the first document having Supernatural
db.shows.updateOne(
    {
        genres: "Supernatural"
    },
    {
        $pull: {
            genres: 'Supernatural'
        }
    }
);

// EXERCISE: Remove the last genre from every document
db.shows.updateMany(
    {
        genres: "Supernatural"
    },
    {
        $pop: {
            genres: 1
        }
    }
);

// Add genre Supernatural to all documents of genre Horror. However the Supernatural genre should not be added if it already exists as a genre in the document.
db.shows.updateMany(
    {
        genres: "Horror"
    },
    {
        $addToSet: {
            genres: {
                $each: [ 'Supernatural', 'Spook' ]
            }
        }
    }
)