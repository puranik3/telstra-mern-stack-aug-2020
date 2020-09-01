const EventEmitter = require( 'events' );

function sum( x, y ) {
    const ee = new EventEmitter();
    
    setTimeout( () => {
        ee.emit( 'SUM_CALCULATED', x + y );
        ee.emit( 'DIFF_CALCULATED', x - y );
    }, 3000 );

    return ee;
}

module.exports = sum;