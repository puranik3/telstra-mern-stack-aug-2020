// rsf
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
    // b4-navbar-minimal-ul
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <ul className="nav navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/workshops">Workshops</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;