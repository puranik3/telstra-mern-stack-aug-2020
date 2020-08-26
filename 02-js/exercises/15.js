// 15. Write a function _sum_ that accepts 2 numbers (say _x_ and _y_) and another function (say, _transform_) as arguments. The transform function should be a function that accepts a number and returns another number - for example, a function _square_ that accepts a number and returns the square of a number. The sum() function applies the transform function on each of each and y and returns the sum of the results of calling transform - for example, sum() would return x^2 + y^2 if called as sum( x, y, square );  
function sum( x, y, transform ) {
    return transform( x ) + transform( y );
}

function square( x ) {
    return x * x;
}

console.log( sum( 2, 3, square ) ); // prints 13
// console.log( sum( 2, 3, cube ) ); // prints 35


// 16. Write a function _sumArray_ that works like so.
// ```
// console.log( sumArray( [ 1, 2, 3 ], square ) ); // prints 14
// console.log( sumArray( [ 1, 2, 3 ], cube ) ); // prints 36
// ```
