const days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
];

// function foo( days ) {

// }

// foo( [ 1, 2, 3 ] )

console.log( days[0] ); // 'Sun'
console.log( days[4] ); // 'Thu'

console.log( days.length );

console.log( days[5] ); // not error - undefined
console.log( days[6] ); // not error - undefined

days[1] = 'Monday';
days[6] = 'Sat';
days.push( 'God knows which day' );
// days[ days.length ] = 'God knows which day';
console.log( days );

console.log( typeof days ); // array is an object in JS

const nums = [];
