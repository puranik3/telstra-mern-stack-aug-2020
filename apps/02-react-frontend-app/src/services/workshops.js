import axios from 'axios';

const getWorkshops = () => {
    return axios.get( `http://workshops-server.herokuapp.com/workshops` )
        .then( response => response.data );
};

const getWorkshopById = ( id ) => {
    return axios.get( `http://workshops-server.herokuapp.com/workshops/${id}` )
        .then( response => response.data );
};


export {
    getWorkshops,
    getWorkshopById
};