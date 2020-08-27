type Person = {
    readonly name: string, // readonly makes name immutable
    age: number,
    spouse?: string
};

let john : { // 1. inline type for john object
    readonly name: string, // readonly makes name immutable
    age: number,
    spouse?: string
} = {
    name: 'John',
    age: 32
};

let jane : Person  /* 2. using type alias */ = {
    name: 'Jane',
    age: 28
};

john.spouse = 'Jane';
john.name = 'Jonathan'; // name is readonly property

export {}