import axios from 'axios';

const getWorkshops = () => {
    // promise (unfulfilled) -> resolved | rejected state
    return axios.get( `http://workshops-server.herokuapp.com/workshops` )
        .then( ( response ) => {
            console.log( 'first resolve handler' );
            console.log( response.data );

            return response.data;
        });


        // .then( result => {
        //     console.log( 'second resolve handler, result = ', result );

        //     return response
        // });

};


export {
    getWorkshops
}