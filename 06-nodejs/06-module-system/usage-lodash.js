// built-in packages and third-party packages use absolute path
const lodash = require( 'lodash' );

console.log( lodash.map( [ 1, 2, 3 ], ( item ) => item * item ) );