/*export default */class Person {
    // no upfront data member definition
    constructor( name, age ) {
        // this; // {} - an newly created empty object
        this.name = name;
        this.age = age;
    }

    celebrateBirthday() {
        this.age++;
    }
}

// named exports
/*export */const PI = 3.14;

/*export */const sum = ( x, y ) => x + y;

// export once
export {
    Person as default,
    PI,
    sum
};