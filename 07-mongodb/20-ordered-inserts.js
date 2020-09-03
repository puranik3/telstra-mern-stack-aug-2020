db.users.insertMany(
    [
        { _id: 1, name: 'user 1000' },
        { _id: 2, name: 'user 1001' },
        { _id: 3, name: 'user 1002' },
        { _id: 4, name: 'user 1003' },
        { _id: 5, name: 'user 1004' }
    ]
)

// use ordered : false to continue even after a failed record
db.users.insertMany(
    [
        { _id: 10, name: 'user 1005' },
        { _id: 11, name: 'user 1006' },
        { _id: 4, name: 'user 1000' },
        { _id: 8, name: 'user 1007' },
        { _id: 9, name: 'user 1008' }
    ],
    { ordered: false }
)