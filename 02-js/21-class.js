// Old way to define a class

// New way
class Person {
    // no upfront data member definition
    constructor( name, age ) {
        // this; // {} - an newly created empty object
        this.name = name;
        this.age = age;
    }

    celebrateBirthday() {
        this.age++
    }
}

const john = new Person( 'John', 32 ); 
const jane = new Person( 'Jane', 28 );

john.celebrateBirthday();
jane.celebrateBirthday();

console.log( john );
console.log( jane );

console.log( john.celebrateBirthday === jane.celebrateBirthday ); // true -> methods are shared among all objects of a class