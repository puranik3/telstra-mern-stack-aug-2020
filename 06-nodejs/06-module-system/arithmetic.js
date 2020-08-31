console.log( 'started executing arithmetic module' );
const sum = ( x, y ) => x + y;
const diff = ( x, y ) => x - y;
const multiply = ( x, y ) => x * y;
const divide = ( x, y ) => x / y;

const PI = 3.14;

const areaOfCircle = r => 2 * PI * r;

module.exports = {
    sum,
    diff,
    multiply,
    divide,
    areaOfCircle
};
console.log( 'finished executing arithmetic module' );