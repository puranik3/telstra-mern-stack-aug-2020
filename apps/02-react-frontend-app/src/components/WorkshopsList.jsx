// rcc
import React, { Component } from 'react';
import { getWorkshops } from '../services/workshops';

export default class WorkshopsList extends Component {
    state = {
        status: WorkshopsList.Status.LOADING_WORKSHOPS,
        workshops: null,
        error: null
    };

    render() {
        const { status, workshops } = this.state;
        const el;

        switch( status ) {
            case WorkshopsList.Status.LOADING_WORKSHOPS:
                /* b4-alert-dismissible */
                el = (
                    <div class="alert alert-primary alert-dismissible fade show" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            <span class="sr-only">Close</span>
                        </button>
                        <strong>Workshops are being loaded. Hang on!</strong>
                    </div>
                );
                break;
            case WorkshopsList.Status.LOADED_WORKSHOPS:
                el = (

                );
                break;
        }
    }

    componentDidMount() {
        getWorkshops()
            .then( workshops => {
                this.setState({
                    status: WorkshopsList.Status.LOADED_WORKSHOPS,
                    workshops
                });
            })
    }
}

WorkshopsList.Status = {
    LOADING_WORKSHOPS: 'LOADING_WORKSHOPS',
    LOADED_WORKSHOPS: 'LOADED_WORKSHOPS',
    ERROR_LOADING_WORKSHOPS: 'ERROR_LOADING_WORKSHOPS'
};