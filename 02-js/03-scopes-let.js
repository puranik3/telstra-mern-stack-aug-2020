var x = 1; // global variable

if( true ) {
    var y = 2; // global variable
}

if( true ) {
    let z = 3; // block-scoped (local variable)
}

console.log( `x = ${x}` ); // ok - 1
console.log( `y = ${y}` ); // ok - 2
console.log( `z = ${z}` ); // error