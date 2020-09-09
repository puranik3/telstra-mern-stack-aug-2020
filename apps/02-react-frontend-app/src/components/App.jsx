// rsf
import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import WorkshopsList from './WorkshopsList';
import WorkshopDetails from './WorkshopDetails';
import { Route } from 'react-router-dom';

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
                <WorkshopDetails />
            </Route>
        </div>
    );
}

export default App;