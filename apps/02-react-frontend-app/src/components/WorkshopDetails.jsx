// rcc
import React, { Component } from 'react';
import { getWorkshops } from '../services/workshops';

import './WorkshopDetails.css';

export default class WorkshopDetails extends Component {
    state = {
        status: WorkshopDetails.Status.LOADING_WORKSHOPS,
        workshops: null,
        error: null
    };

    render() {
        const { status, workshops, error } = this.state;
        let el;

        switch( status ) {
            case WorkshopDetails.Status.LOADING_WORKSHOPS:
                /* b4-alert-dismissible */
                // <Alert theme="primary">
                //     Workshops are being loaded. Hang on!
                // </Alert>
                el = (
                    <div className="alert alert-primary alert-dismissible fade show" role="alert">
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            <span className="sr-only">Close</span>
                        </button>
                        <strong>Workshops are being loaded. Hang on!</strong>
                    </div>
                );
                break;
            case WorkshopDetails.Status.LOADED_WORKSHOPS:
                el = (
                    <div className="row">
                        {
                            workshops.map( workshop => (
                                <div className="col-4 d-flex" key={workshop.id}>
                                    <div className="card w-100 my-3 d-flex flex-column">
                                        <div className="card-body">
                                            <div className="card-img-container d-flex flex-column justify-content-center">
                                                <img className="card-img-top w-50 d-block mx-auto" src={workshop.imageUrl} alt={workshop.description} />
                                            </div>
                                            <h4 className="card-title">{workshop.name}</h4>
                                            <div className="card-text">
                                                <div>
                                                    <span>{workshop.startDate}</span> - <span>{workshop.endDate}</span>
                                                </div>
                                                <div>
                                                    <span>{workshop.time}</span>
                                                </div>
                                                <div className="my-3" dangerouslySetInnerHTML={{ __html: workshop.description }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                );
                break;
            case WorkshopDetails.Status.ERROR_LOADING_WORKSHOPS:
                el = (
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            <span className="sr-only">Close</span>
                        </button>
                        <strong>{error.message}</strong>
                    </div>
                );
        }

        return (
            <div className="container my-4">
                <h1>Workshops List</h1>
                <hr />
                {el}
            </div>
        )
    }

    componentDidMount() {
        getWorkshops()
            .then( workshops => {
                this.setState({
                    status: WorkshopDetails.Status.LOADED_WORKSHOPS,
                    workshops
                });
            })
            .catch( error => {
                this.setState({
                    status: WorkshopDetails.Status.ERROR_LOADING_WORKSHOPS,
                    error
                });
            });
    }
}

WorkshopDetails.Status = {
    LOADING_WORKSHOPS: 'LOADING_WORKSHOPS',
    LOADED_WORKSHOPS: 'LOADED_WORKSHOPS',
    ERROR_LOADING_WORKSHOPS: 'ERROR_LOADING_WORKSHOPS'
};