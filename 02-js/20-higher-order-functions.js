// "higher order functions" (hof)

function f( g ) {
    console.log( 'i am f' );
    console.log( g );
    g();
}

function h() {
    console.log( 'i am h' );
}

f( h ); // YES // g = h

// foo.call( { x : 1 } ); // just like objects can be created inline and passed to a function, similarly a function
f(function() {
    console.log( 'i am a function with no name' );
}); // ?

function p() { // every time p() is called, a new q() function is created
    function q() {
        console.log( 'i am q' );    
    }

    return q; // YES
}

const r1 = p();
r1();
const r2 = p();
r2();
console.log( r1 === r2 );


function a() {
    return function() {
        console.log( 'i am a function created within a. I have no name.' );    
    };
}

const b = a();
b();