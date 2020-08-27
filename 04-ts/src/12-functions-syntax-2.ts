// another syntax for defining types for functions using expression / arrow function syntax

type BinaryOperation = ( x : number, y : number ) => number;

const multiply : BinaryOperation = function( x, y ) {
    return x * y;
};

const divide : BinaryOperation = ( x, y ) => x * y;

export {}