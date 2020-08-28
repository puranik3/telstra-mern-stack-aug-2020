interface IPerson {
    name: string;
    age: number;
    celebrateBirthday: () => void
}

interface IEmployee extends IPerson {
    talktime: number;
    role: string;
    dept: string;
    promote: () => void
}

class Person implements IPerson {
    // option 1 - define data member and constructor yourself
    // /*public */name: string; // default is public
    // public age: number;
    // private readonly aadhaar?: string; // we even have protected

    // constructor( name : string, age : number, aadhaar: string ) {
    //     this.name = name;
    //     this.age = age;
    //     this.aadhaar = aadhaar;
    // }

    // option 2 - define access specifiers in an empty body constructor (does everything done in option 1)
    constructor( public name: string, public age : number, private readonly aadhaar? : string ) {
    }

    /*public */celebrateBirthday() { // by default all data members and methods are public
        this.age++;
    }
}

class Employee extends Person {
    // can use aadhhaar
}

const john = new Person( 'John', 32, '1234-5678-9012' );
john.celebrateBirthday();
console.log( john );

// export {}
