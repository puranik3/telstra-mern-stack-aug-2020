// Advantages of interfaces vs Type alias
    // extending interfaces is more understandable
    // interface Employee extends Person { ... }
    // you can split interface definition across multiple files - the definitions are merged

// Interfaces can be used as 
    // 1. type for an object
    // 2. implement in classes
type MarryFn = ( obj : Person ) => string;

interface Person {
    readonly name: string,
    age: number,
    spouse?: string,
    celebrateBirthday?: () => void,
    marry?: MarryFn
}

let john : Person = {
    name: 'John',
    age: 32,
    celebrateBirthday() {
        this.age++;
    },
    marry( spouse : Person ) {
        this.spouse = spouse.name;
        return this.spouse;
    }
};

let jane : Person  = {
    name: 'Jane',
    age: 28
};

// TS error - I know you are concerned, but I know what I am doing - dont worry
// john.marry( jane ); // TS reports error
// <data_type> value - type casting / type assertion
( <MarryFn>(john.marry) )( jane );

export {}