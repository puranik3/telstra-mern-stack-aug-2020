import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div class="jumbotron">
            <h1 class="display-3">Workshops App</h1>
            <hr class="my-2" />
            <p class="lead">
                Welcome to workshops app. You can search for technical workshops here. Here is a <Link to="/workshops">list of workshops</Link>
            </p>
        </div>
    );
}

export default Home;