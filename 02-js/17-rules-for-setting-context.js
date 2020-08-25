// the name of a function is a reference to the function in memory
function celebrateBirthday() {
    console.dir( this, { depth: 0 } );
}

celebrateBirthday();

const happyBirthday = celebrateBirthday;
happyBirthday();

console.log( happyBirthday === celebrateBirthday );