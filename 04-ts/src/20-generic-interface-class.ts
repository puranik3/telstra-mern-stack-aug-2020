type ShortName = string;

interface FullName {
    brand: string;
    productName: string;
}

// generic interface acts like a template (blueprint) for an interface
interface Item<T1> {
    name: T1;
    price: number;
}

// a concrete (Real) interface - Item<ShortName>
const item1 : Item<ShortName> = {
    name: 'Apple iPhone X',
    price: 40000
};

// a concrete (Real) interface - Item<FullName>
const item2 : Item<FullName> = {
    name: {
        brand: 'One Plus',
        productName: 'Nord'
    },
    price: 45000
};

function printItem1<T>( item : Item<T> ) { }

// U extends Item<any> restricts type U to a concrete implementation of Item<>
function printItem2<U extends Item<any>>( item : U ) { }

printItem2<LongName>
printItem2<Item<LongName>>