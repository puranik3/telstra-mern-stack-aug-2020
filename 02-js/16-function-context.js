// every function has a a context - tells something more about the environment in which the function is invoked
// the JS runtime sets the context of the function thats called
// function context is for a call to a function, not fixed for a function itself
function foo( x, y ) {
    console.log( `x = ${x}, y = ${y}` );
    console.log( `this = `, this );
}

foo(); // context is the default one
foo.call( { x: 1 }, 12, 13 ); // function is also an object - // same as calling foo() but we can set the context

// bind() returns a function
const boundFoo = foo.bind( { x: 1 } );
boundFoo(); // foo.call( { x: 1 } )
boundFoo( 12, 13 ); // foo.call( { x: 1 }, 12, 13 )