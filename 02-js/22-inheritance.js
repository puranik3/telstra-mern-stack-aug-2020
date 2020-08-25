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
        this.age++;
    }
}

class Employee extends Person {
    constructor( name, age, talktime ) {
        super( name, age );
        this.talktime = talktime;
    }

    topup( extra ) {
        this.talktime += extra;
    }

    celebrateBirthday() {
        super.celebrateBirthday();
        console.log( 'Here is new handset - latest and greatest on your birthday! tring! Tring!!' );
    }
}

const john = new Employee( 'John', 32, 1000 ); 
const jane = new Employee( 'Jane', 28, 1500 );

john.celebrateBirthday(); // ?
jane.celebrateBirthday();

jane.topup( 500 );

console.log( john );
console.log( jane );


console.log( john.celebrateBirthday === jane.celebrateBirthday ); // true -> methods are shared among all objects of a class