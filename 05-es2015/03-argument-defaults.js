function greet( message = 'Hello', name = 'World' ) {
    // if( name === undefined ) {
    //     name = 'World';
    // }

    // name = name || 'World';
    console.log( `${message} ${name}` );
}

greet( 'Good morning', 'John' );
greet( 'Good morning' );
greet();
greet( undefined, 'Jane' );