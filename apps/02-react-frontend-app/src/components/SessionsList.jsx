import React, { Component } from 'react';

export default class SessionsList extends Component {
    // maintain state with status, sessions (null initially), error (null initially)

    render() {
        // check this.state.status and render UI accordingly (loading / loaded / error UI)
        
        return (
            <div>
                sessions list
            </div>
        )
    }

    // fetch sessions (pass id of workshop to a new service methods) - set appropriate status, session state on succes, or error object on failure
}
