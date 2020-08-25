function foo() {
    let a = 1;

    function bar() { // local function
        let x = 1;

        if( true ) {
            var y = 10; // bar function scope
        }

        console.log( `a = ${a}` );
        console.log( `x = ${x}` );
        console.log( `y = ${y}` );
    }

    bar();
}

foo();
// bar(); // error