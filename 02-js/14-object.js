// object literal syntax
// collection of key-value pairs (keys or properties)
// value -> number, boolean, string, null, undefined, array, object, function
// "method" -> a property whose value is a function

// even when variable is const, the object it refers to is "mutable"
const john = {
    name: 'John',
    age: 32,
    children: [
        'Jack', 'Jill'
    ],
    address: {
        city: 'Chennai',
        pin: 600100
    },
    celebrateBirthday: function() {
        this.age++;
    }
};

const key = "name";
console.log( john[key] );

console.log( john.name );
console.log( john.address.city );
console.log( john.children[1] );

john.children.push( 'Joe' );
console.log( john.children );

// objects are dynamic bag of properties
// add properties
john.company = 'Telstra';
john.spouse = {
    name: 'Jane',
    age: 28
};
john.jump = function( newCompany ) {
    this.company = newCompany;
};

console.log( john.spouse.name );
john.jump( 'Airtel' );

// delete properties
delete john.age;

console.log( john );