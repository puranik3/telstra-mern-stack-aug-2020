import { Employee } from './Employee.js';

const john = new Employee( 'John', 32, 1000 ); 
const jane = new Employee( 'Jane', 28, 1500 );

john.celebrateBirthday(); // ?
jane.celebrateBirthday();

jane.topup( 500 );

console.log( john );
console.log( jane );


console.log( john.celebrateBirthday === jane.celebrateBirthday ); // true -> methods are shared among all objects of a class