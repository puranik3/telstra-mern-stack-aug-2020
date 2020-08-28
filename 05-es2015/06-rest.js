// ... (rest)
// 3 situations in which rest operator can be used

// 1. along with last argument of a function
function foo( x, y, ...z ) {
    console.log( x );
    console.log( y );
    console.log( z );
}

// rest of the arguments ( 3, 4, 5 ) are grouped into an array and assigned to z
foo( 1, 2, 3, 4, 5 );
foo( 1 ); // y is undefined and z is empty array
foo( 1, 2 ); // z is empty array
foo( 1, 2, 3 ); // z -> [ 3 ]

// 2. during array destructuring
const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];
const [ first, second, ...otherDays ] = days;
console.log( otherDays ); // [ 'Wednesday', 'Thursday', 'Friday' ]

// 3. during object detsructuring
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
const { name, address : { city, ...otherAddressDetails }, ...otherDetailsOfJohn } = john;
console.log( otherDetailsOfJohn ); // { age: 32, emailids: [ .. ] }
console.log( otherAddressDetails ); // { pin: 400100 }