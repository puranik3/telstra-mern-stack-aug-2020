// primtives are copied by values
const x = 123;
let y = x; // values of x is copied to y
y++;
console.log( x, y );

// non-primitives (objects, arrays) are copied by reference
const john = {
    name: 'John',
    age: 32
};

const johnCopy = john;
johnCopy.age++;

console.log( john, johnCopy );

function change( x ) {
    x++;
}

change( x ); // copy by value form global x
console.log( x ); // still 123

function changeArray( arr ) {
    arr.push( 123 );
}

const numbers = [ 1, 2, 3, 4 ];
changeArray( numbers ); // copy by reference 
console.log( numbers ); // 123 ghas been added