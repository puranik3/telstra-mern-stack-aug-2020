db.shows.find( { runtime: { $lt: 60 } } ).pretty()

db.shows.find( { runtime: { $gt: 30, $lt: 60 } }, { runtime: true } ).pretty()

db.shows.find( { "rating.average": { $gte: 8 } }, { rating: 1 } )

db.shows.find( { "rating.average": { $gte: 8, $lte: 9 } }, { rating: 1 } ).count()

db.shows.find( { genres: "Horror" }, { genres: true } )

db.shows.find( { genres: [ "Horror" ] }, { genres: true } ) // no match in given collection

db.shows.find( { genres: { $in: [ "Drama", "Horror" ] } }, { genres: true } )

db.shows.find( { type: { $in : [ 'Animation', 'Reality' ] } }, { type: true } )

db.shows.find( { genres: { $nin : [ 'Drama', 'Horror' ] } }, { genres: true } )

db.shows.find( { type: { $nin: [ 'Animation', 'Reality' ] } } )

db.shows.find( { "network.name": { $in: [ "HBO", "FOX" ] } } )

db.shows.find( 
    { 
        $or: [
            { genres: 'Drama' },
            { genres: 'Horror' }
        ] 
    }
);

db.shows.find(
    {
        genres: {
            $not: {
                $in: [ 'Drama', 'Horror' ]
            }
        }
    }
);

db.shows.find( 
    { 
        $and: [
            { genres: 'Drama' },
            { genres: 'Horror' }
        ] 
    }
);

db.shows.find( 
    { 
        $and: [
            { genres: 'Drama' },
            { genres: { $ne: 'Horror' } }
        ] 
    }
);

// solution to c - v)
db.shows.find(
    {
        $or: [
            { genres: { $ne: 'Drama' } },
            { genres: { $ne: 'Horror' } }
        ]
    }
);

// !( genres == 'Drama' && genres == 'Horror')
// most probably a solution for c -v  is NOt possible with $and

// solution using $exists and $type
db.shows.find(
    {
        webChannel: {
            $exists: true,
            $not: {
                $type: "null"
            }
        }
    }
);

// solution without using $type
db.shows.find(
    {
        webChannel: {
            $exists: true,
            $ne: null
        }
    }
);

// Find shows that have a webChannel with a country field within
db.shows.find(
    {
        "webChannel.country": {
            $exists: true,
            $ne: null
        }
    },
    {
        "webChannel.country.name": 1
    }
);

// Find all shows whose name contains the word "Last"
// last/i will also work
db.shows.find(
    {
        name: {
            $regex: /last/,
            options: 'i'
        }
    },
    { name: true }
);

// iv) Find all shows whose weight is more than 10 times their average rating
db.shows.find(
    {
        $expr: {
            $gt: [
                "$weight",
                {
                    $multiply: [ "$rating.average", 10 ]
                }
            ]
        }
    },
    { weight: 1, "rating.average": 1 }
);

// Find shows that have BOTH Drama and Horror as their genre. Use $all.
// $all works on multi-valued attributes
db.shows.find(
    {
        genres: {
            $all: [ 'Drama', 'Horror' ]
        }
    },
    { genres: 1, _id: 0 }
);

// create students collection
db.students.insertMany(
    [
        {
            name: "Ram",
            scores: [
                { subject: 'History', score: 100 },
                { subject: 'Geography', score: 95 }
            ]
        },
        {
            name: "Shyam",
            scores: [
                { subject: 'History', score: 80 },
                { subject: 'Science', score: 100 },
                { subject: 'English', score: 80 }
            ]
        },
        {
            name: "Sita",
            scores: [
                { subject: 'Commerce', score: 99 },
                { subject: 'Maths', score: 85 },
                { subject: 'English', score: 85 }
            ]
        }
    ]
)

// Find all students who have a score of more 90% in some subject and have taken up history
db.students.find(
    {
        "scores.subject": "History",
        "scores.score": { $gt: 90 }
    }
)

// Find all students who have a score of more than 90% in history
db.students.find(
    {
        scores: {
            $elemMatch: {
                subject: "History",
                score: { $gt: 93 }
            }
        }
    }
)

// Find all students who have taken up exactly 2 subjects
db.students.find(
    {
        scores: {
            $size: 2
        }
    }
)

// Find all students who have taken up history and project the matching subject details (i..e history)
db.students.find(
    {
        "scores.subject": 'History'
    },
    {
        name: 1,
        "scores.$": 1
    }
)

// Find all students who have taken up history and project the first 2 subjects they have in the document.
db.students.find(
    {
        "scores.subject": 'History'
    },
    {
        name: 1,
        scores: {
            $slice: 2
        }
    }
)