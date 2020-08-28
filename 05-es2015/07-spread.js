// ... (spread)

// 1. with an array
const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];
const daysCopy = [ ...days ] // [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ]
const arr1 = [ 1, 2, 3 ], arr2 = [ 4, 5, 6 ];
const arr3 = [ ...arr1, ...arr2 ]; // [ 1, 2, 3, 4, 5, 6 ]

const numbers = [ 1, 6, 3, 9, 2, -1 ];

// console.log( Math.max( [ 1, 6, 3, 9, 2, -1 ] ) );  // will not work
// console.log( Math.max( 1, 6, 3, 9, 2, -1 ) ); 
console.log( Math.max( ...numbers ) ); 

// 2. with an object
const john = {
    name: 'John',
    age: 32,
    address: {
        city: 'Mumbai',
        pin: 400100
    },
    emailids: [
        'john@gmail.com',
        'john@yahoo.com'
    ]
};

// ...obj spreads the key-value pairs of obj with commas in between
const johnCopy = {
    ...john, // name: 'John', age: 32, address : john.address, emailids: john.emailids
    age: 33,
    spouse: 'Jane'
};

console.log( 'johnCopy (after creation) = ', johnCopy );

// change parts of johnCopy (the copy) and print john (the original)
johnCopy.name = 'Jonathan';
johnCopy.address.city = 'Pune';

console.log( 'john (after modifying john copy) = ', john );

const johnDeepCopy = {
    ...john, // name: 'John', age: 32, address : john.address, emailids: john.emailids
    address: {
        ...john.address // city: 'Pune', pin: 400100
    },
    emailids: [
        ...john.emailids // 'john@gmail.com', 'john@yahoo.com'
    ]
};
console.log( johnDeepCopy );