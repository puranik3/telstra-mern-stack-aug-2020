function sum( x : number, y : number ) {
    return x + y;
}

// Advantages
// we are able to identify that we called sum with incorrect type args
// Elimination of type-related bugs
// Autocompletion
// Extra features - interfaces, generics, access specifiers (public, private, protected), and many many more advanced features
// TS is good when compared to plain JS when you have a big application developed by a big team
sum( 'hello', 'world' );
