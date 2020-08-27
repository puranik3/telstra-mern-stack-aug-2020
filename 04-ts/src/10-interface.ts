// Advantages of interfaces vs Type alias
    // extending interfaces is more understandable
    // interface Employee extends Person { ... }
    // you can split interface definition across multiple files - the definitions are merged

// Interfaces can be used as 
    // 1. type for an object
    // 2. implement in classes
interface Person {
    readonly name: string,
    age: number,
    spouse?: string
}

let john : Person = {
    name: 'John',
    age: 32
};

let jane : Person  = {
    name: 'Jane',
    age: 28
};

john.spouse = 'Jane';
john.name = 'Jonathan'; // name is readonly property

export {}