const john = {
    name: 'John',
    age: 32,
    address: {
        city: 'Mumbai',
        pin: 400100
    },
    emailids: [
        'john@gmail.com',
        'john@yahoo.com'
    ]
};

// no address variable is created
const { 
    name : firstName,
    age,
    address : { 
        city : residence
    },
    address : location,
    emailids : [ , secondaryEmailId ],
    spouse = 'Single'
} = john;

console.log( firstName, age, location, residence, secondaryEmailId, spouse );

function ajax( { url, data : { name, price } } ) {
    console.log( url, name, price );

    return {
        x: 1,
        y: 2
    };
}

const { x } = ajax({
    url: 'https://www.mysite.com/api/products',
    data: {
        name: 'Hamam soap',
        price: 25
    }
});
console.log( x );