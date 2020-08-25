// the name of a function is a reference to the function in memory
function celebrateBirthday() {
    // console.log( this.age );
    console.log( this );
    this.age = this.age + 1;
}

const john = {
    name: 'John',
    age: 32,
    celebrateBirthday: celebrateBirthday,
    setName( newName ) { // setName: function() { .. }
        this.name = newName;
    }
};

// celebrateBirthday(); // this -> global
john.celebrateBirthday(); // this -> john

console.log( celebrateBirthday === john.celebrateBirthday ); // true

const jane = {
    name: 'Jane',
    age: 28
};

john.celebrateBirthday.call( jane ); // this -> jane

john.setName( 'Jonathan' );
console.log( john );

const setName = john.setName;
setName( 'Janette' ); // this -> global
console.log( jane );
console.log( john );