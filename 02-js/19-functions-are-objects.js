// "Functions are first-class citizens"
// functions are on par with objects in all way
// function ARE objects in JavaScript

function foo() {
    console.log( 'i am foo' );
}

foo.x = 1; // ok
console.log( foo.x );

foo.bar = function() { // ok
    console.log( 'i am bar' );
};
foo.bar();