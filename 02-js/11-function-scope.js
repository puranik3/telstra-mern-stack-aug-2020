function foo( x ) { // x is local to function foo
    var y = 2; // y is local to function foo
    let z = 3; // z is local to function foo

    if( true ) {
        var p = 4; // local to function foo
        let q = 5; // local to this block
        r = 5; // declares a variable r and initializes it - r is global!
    }

    console.log( `x = ${x}` ); // ok
    console.log( `y = ${y}` ); // ok
    console.log( `z = ${z}` ); // ok
    console.log( `p = ${p}` ); // ok
    // console.log( `q = ${q}` ); // error
}

console.log( `r = ${r}` ); // error - r variable is NOT created till foo() is called
foo(); // no need to pass argument!!!
// console.log( `p = ${p}` ); // not ok (local to foo function)
console.log( `r = ${r}` ); // ok