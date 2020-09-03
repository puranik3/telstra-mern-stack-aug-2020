db.shows.find( { runtime: { $lt: 60 } } ).pretty()

db.shows.find( { runtime: { $gt: 30, $lt: 60 } }, { runtime: true } ).pretty()

