// type alias is used to define a name for a type
// ? against a property makes it optional
type Person = { name: string, age: number, spouse?: string };
type NumberOrStringItemArray = (number | string)[];

let john : Person = {
    name: 'John',
    age: 32
};

let jane : Person  = {
    name: 'Jane',
    age: 28
};

john.spouse = 'Jane';

export {}