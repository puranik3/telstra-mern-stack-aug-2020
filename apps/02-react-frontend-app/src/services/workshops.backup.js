import axios from 'axios';

const getWorkshops = () => {
    return axios.get( `http://workshops-server.herokuapp.com/workshops` )
        .then( ( response ) => {
            return response.data;
        });
};

export {
    getWorkshops
}