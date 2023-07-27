import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function TopNav() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} end to="/" activeClassName="active">Willkommen</Nav.Link>
                    <Nav.Link as={NavLink} to="/playlist" activeClassName="active">Playlist</Nav.Link>
                    <Nav.Link as={NavLink} to="/advertisement" activeClassName="active">Werbung buchen</Nav.Link>
                    <Nav.Link as={NavLink} to="/employees" activeClassName="active">Mitarbeiter</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default TopNav;
