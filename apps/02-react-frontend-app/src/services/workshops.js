import axios from 'axios';

const getWorkshops = () => {
    return axios.get( `http://workshops-server.herokuapp.com/workshops` )
        .then( response => response.data );
};

const getWorkshopById = ( id ) => {
    return axios.get( `http://workshops-server.herokuapp.com/workshops/${id}` )
        .then( response => response.data );
};

const addSession = ( workshopId, session ) => {
    const sessionWithWorkshopId = {
        ...session,
        workshopId: +workshopId,
        duration: +session.duration,
        sequenceId: +session.sequenceId,
        upvoteCount: 0
    };

    return axios.post(
        `http://workshops-server.herokuapp.com/sessions/`,
        sessionWithWorkshopId,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
        .then( response => response.data );
};

export {
    getWorkshops,
    getWorkshopById,
    addSession
};