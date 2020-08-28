import Human, { PI, sum as add } from './Person.js';

export class Employee extends Human {
    constructor( name, age, talktime ) {
        super( name, age );
        this.talktime = talktime;
    }

    topup( extra ) {
        this.talktime += extra;
    }

    celebrateBirthday() {
        super.celebrateBirthday();
        console.log( 'Here is new handset - latest and greatest on your birthday! tring! Tring!!' );
    }
}

console.log( '12 + 13 = ', add( 12, 13 ) );