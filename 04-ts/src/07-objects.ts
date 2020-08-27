// implicit typing
let john = {
    name: 'John',
    age: 32
};

// explicit typing
let jane : { name: string, age: number } = {
    name: 'Jane',
    age: 28
};

john.spouse = 'Jane';

export {}