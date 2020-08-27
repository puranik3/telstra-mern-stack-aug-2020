// number, boolean, string, null, undefined
let x : number;
let y : string;
let z : boolean;

x = null; // strictNullCheck is true (config)
z = 'hello'; // error

let a : null;
a = null; // only possible value

let b : undefined;
b = undefined; // only possible value

export {}