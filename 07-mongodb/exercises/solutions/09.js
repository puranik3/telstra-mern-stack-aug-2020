// a) Using $match to get a collection with a filtered set of documents
// i) Find all shows that have Drama as a genre
db.shows.aggregate(
    [
        {
            $match: {
                genres: 'Drama'
            }
        }
    ]
);

// ii) Find all shows on HBO
db.shows.aggregate(
    [
        {
            $match: {
                "network.name": 'HBO'
            }
        }
    ]
);

// // Using$grouptogroupdocumentsbyfieldvaluesandproduceanewcollection representing groups
// i) Groupshowsbythenameofnetworktheyarerunningon,andalsofindthenumber of shows in each network
db.shows.aggregate(
    [
        {
            $group: {
                _id: "$network.name",
                numShows: {
                    $sum: 1
                }
            }
        }
    ]
);

// Groupshowsbynameofnetworkandcountrytheyarerunningin,andalsofindthe number of shows, and average runtime of shows in each group (network+country combination)
// we also sort the results by network name
db.shows.aggregate(
    [
        {
            $group: {
                _id: {
                    network: "$network.name",
                    country: "$network.country.name"
                },
                numShows: {
                    $sum: 1
                },
                averageRuntime: {
                    $avg: "$runtime"
                }
            }
        },
        {
            $sort: {
                "_id.network": 1
            }
        }
    ]
)

// Repeat the above query but create a new field called “stats” in the output documents. The “stats” field should have number of shows, and average runtime of shows for the group
// db.shows.aggregate(
//     [
//         {
//             $group: {
//                 _id: {
//                     network: "$network.name",
//                     country: "$network.country.name"
//                 },
//                 stats: {
//                     numShows: {
//                         $sum: 1
//                     },
//                     averageRuntime: {
//                         $avg: "$runtime"
//                     }
//                 }
//             }
//         },
//         {
//             $sort: {
//                 "_id.network": 1
//             }
//         }
//     ]
// )

// Just like we can transform document to form new fields with subdocuments while projecting, we can also create a new array. Using the $push operator in $group stage, we can create a new array with one item per document in the group! This is a special feature of MongoDB with no equivalent in SQL (you can calculate only aggregate values like sum, average etc. there). Repeat the above exercise, and create an additional field “names” that is an array of names of all shows in the group.
db.shows.aggregate(
    [
        {
            $group: {
                _id: {
                    network: "$network.name",
                    country: "$network.country.name"
                },
                numShows: {
                    $sum: 1
                },
                averageRuntime: {
                    $avg: "$runtime"
                },
                shows: {
                    $push: '$name'
                }
            }
        }
    ]
);

// Select all shows that are in English (“language” value), and then group them by their type. The output should have the names of the group in the type field, along with the number of shows in each group.
db.shows.aggregate(
    [
        {
            $match: {
                language: 'English'
            }
        },
        {
            $group: {
                _id: {
                    type: '$type'
                },
                numShows: {
                    $sum: 1
                },
                names: {
                    $push: '$name'
                }
            }
        }
    ]
)

// Repeattheexercisegroupingshowsbynetworknameandcountry.Thefinalresults should show only the grouped documents of networks that have at least 5 shows.
db.shows.aggregate([
        {
            $group: {
                _id: {
                    network: "$network.name",
                    country: "$network.country.name"
                },
                numShows: {
                    $sum: 1
                },
                averageRuntime: {
                    $avg: "$runtime"
                },
                shows: {
                    $push: '$name'
                }
            }
        },
        {
            $match: {
                numShows: {
                    $gte: 5
                }
            }
        }
]);

// EXERCISE: Repeat the same but show only groups with average runtime at less than 50.

// Findthename,networkname,scheduleandruntimeofallshows
// $concat, $toDate, $year, $convert

// networkName: HBO (US)
db.shows.aggregate(
    [
        {
            $project: {
                name: '$name',
                networkName: {
                    $concat: [
                        "$network.name", " (", "$network.country.code", ")"
                    ]
                },
                schedule: "$schedule.day",
                runtime: "$runtime"
            }
        },
        {
            $out: "results"
        }
    ]
)