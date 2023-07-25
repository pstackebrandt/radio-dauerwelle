import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function TopNav() {
    return (
        <div className='top-nav'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" activeClassName="active" exact to="/">Willkommen</NavLink>
                        <NavLink className="nav-link" activeClassName="active" to="/playlist">Playlist</NavLink>
                        <NavLink className="nav-link" activeClassName="active" to="/advertisement">Werbung buchen</NavLink>
                        <NavLink className="nav-link" activeClassName="active" to="/employees">Mitarbeiter</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default TopNav;