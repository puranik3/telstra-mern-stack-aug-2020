// rcc
import React, { Component } from 'react';
import { getWorkshopById } from '../services/workshops';
import Moment from 'react-moment';
import { Route, Link, Switch } from 'react-router-dom';
import AddSession from './AddSession';
import SessionsList from './SessionsList';

export default class WorkshopDetails extends Component {
    state = {
        status: WorkshopDetails.Status.LOADING_WORKSHOP_DETAILS,
        workshop: null,
        error: null
    };

    render() {
        const { status, workshop, error } = this.state;
        let el;

        switch( status ) {
            case WorkshopDetails.Status.LOADING_WORKSHOP_DETAILS:
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
                        <strong>Workshop details are being loaded. Hang on!</strong>
                    </div>
                );
                break;
            case WorkshopDetails.Status.LOADED_WORKSHOP_DETAILS:
                el = (
                    <>
                        <div>
                            <h2>
                                {workshop.name}
                            </h2>
                            <hr />
                            <div className="row my-4">
                                <div className="col-4">
                                    <img className="img-fluid" src={workshop.imageUrl} alt={workshop.description} />
                                </div>
                                <div className="col-8">
                                    <div className="row">
                                        <div className="col-3">
                                            <p>
                                                <small>
                                                    <Moment interval={0} format="MMM D YYYY">
                                                        {workshop.startDate}
                                                    </Moment>
                                                    {" - "}
                                                    <Moment interval={0} format="MMM D YYYY">
                                                        {workshop.endDate}
                                                    </Moment>
                                                </small>
                                            </p>
                                            <p>
                                                <small className="text-muted">
                                                    {workshop.time}
                                                </small>
                                            </p>
                                        </div>
                                        <div className="col-3">
                                            <p>
                                                <small>Online</small>
                                            </p>
                                            <p>
                                                <small>In person</small>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12" dangerouslySetInnerHTML={{__html: workshop.description}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <Link to={this.props.match.url}>Sessions</Link>
                                &nbsp;&nbsp;
                                <Link to={`${this.props.match.url}/add`}>Add session</Link>
                            </div>
                            <div>
                                <Switch>
                                    <Route path={`${this.props.match.path}/add`} component={AddSession} />
                                    <Route path={this.props.match.path} component={SessionsList} />
                                </Switch>
                            </div>
                        </div>
                    </>
                );
                break;
            case WorkshopDetails.Status.ERROR_LOADING_WORKSHOP_DETAILS:
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
                {el}
            </div>
        );
    }

    componentDidMount() {
        getWorkshopById( this.props.match.params.id )
            .then( workshop => {
                this.setState({
                    status: WorkshopDetails.Status.LOADED_WORKSHOP_DETAILS,
                    workshop
                });
            })
            .catch( error => {
                this.setState({
                    status: WorkshopDetails.Status.ERROR_LOADING_WORKSHOP_DETAILS,
                    error
                });
            });
    }
}

WorkshopDetails.Status = {
    LOADING_WORKSHOP_DETAILS: 'LOADING_WORKSHOP_DETAILS',
    LOADED_WORKSHOP_DETAILS: 'LOADED_WORKSHOP_DETAILS',
    ERROR_LOADING_WORKSHOP_DETAILS: 'ERROR_LOADING_WORKSHOP_DETAILS'
};