import React from "react";
import { NavLink } from "react-router-dom";

function TopNav() {
    return (
        <div className='top-nav'>
            <nav>
                <NavLink to="/">Willkommen</NavLink><br />
                <NavLink to="playlist">Playlist</NavLink><br />
                <NavLink to="advertisement">Werbung buchen</NavLink><br />
                <NavLink to="employees">Mitarbeiter</NavLink>
            </nav>
        </div>
    );
}

export default TopNav;