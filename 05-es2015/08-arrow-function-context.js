// execute this in the browser
function outer() {
    console.log( 'this (outer) = ', this );

    // any old syntax
    const inner1 = function() {
        console.log( 'this (inner1) = ', this );
    }
    
    // arrow function syntax
    const inner2 = () => {
        console.log( 'this (inner2) = ', this );
    }

    inner1();
    inner2();
}

// all 3 have context window
outer();

// outer, inner2 have { x: 1 } as context; inner1 has window as context
outer.call( { x: 1 } ); 