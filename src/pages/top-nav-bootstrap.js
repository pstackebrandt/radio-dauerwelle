import React from "react";
import { Nav, Navbar, Container, NavLink } from "react-bootstrap";

const TopNavBootstrap = () => {
  return (
    <div className="top-nav">
      <Navbar bg="primary" expand="md">
        <Container>
          <Navbar.Brand href="/">Navbar Brand</Navbar.Brand>
          <Nav>
            <NavLink to="/">Willkommen</NavLink>
            <NavLink to="playlist">Playlist</NavLink>
            <NavLink to="advertisement">Werbung buchen</NavLink>
            <NavLink to="employees">Mitarbeiter</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNavBootstrap;
