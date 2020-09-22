// rsf
import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import WorkshopsList from './WorkshopsList';
import WorkshopDetails from './WorkshopDetails';
import { Route, withRouter } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WorkshopDetailsWithRouter = withRouter( WorkshopDetails );

function App(props) {
    return (
        <div>
            <NavBar />
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/workshops" exact>
                <WorkshopsList />
            </Route>
            <Route path="/workshops/:id">
                <WorkshopDetailsWithRouter />
            </Route>
            {/* <Route path="/workshops/:id" component={WorkshopDetails} /> */}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
        </div>
    );
}

export default App;