type Person = {
    readonly name: string, // readonly makes name immutable
    age: number,
    spouse?: string
};

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