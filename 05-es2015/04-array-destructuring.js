const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];

// const first = days[0], second = days[1], fifth = days[4], sixth = days[5];
const [ first, second, , , fifth = 'Holiday', sixth = 'Holiday' ] = days;

// Monday Tuesday Friday undefined
console.log( first, second, fifth, sixth );