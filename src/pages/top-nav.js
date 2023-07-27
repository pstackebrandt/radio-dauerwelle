// file: top-nav.js

// Import the necessary libraries and components.
import React from "react";
import { useMatch, Link } from "react-router-dom";  // Importing useMatch hook and Link component from react-router-dom
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

// CustomLink component that wraps the Nav.Link component from react-bootstrap
// It also applies the active class if the current path matches the 'to' prop
function CustomLink({ to, children, ...props }) {
    // useMatch hook checks if the current path matches the 'to' prop
    // The 'end: true' option ensures it's an exact match (equivalent to 'exact' prop in react-router v5)
    let match = useMatch({ path: to, end: true });

    // We use the 'as' prop to replace the underlying component of Nav.Link with the Link component from react-router
    // This is because Nav.Link doesn't handle the routing logic that Link does
    // The className prop adds the 'active' class if the current path matches the 'to' prop
    return (
        <Nav.Link as={Link} to={to} className={match ? "active" : ""} {...props}>
            {children}
        </Nav.Link>
    );
}

// The main TopNav component
function TopNav() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/* We use our CustomLink component instead of Nav.Link or NavLink */}
                    <CustomLink to="/">Welcome</CustomLink>
                    <CustomLink to="/playlist">Playlist</CustomLink>
                    <CustomLink to="/advertisement">Book Advertisement</CustomLink>
                    <CustomLink to="/employees">Employees</CustomLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default TopNav;

/*
Why use the CustomLink component?

see also: https://chat.openai.com/share/820bd765-ac2c-4b92-b2c3-083937c49a93

The reason for introducing the CustomLink component is primarily due to
 the incompatibilities between the Nav.Link component provided by react-bootstrap 
 and the NavLink component from react-router-dom v6.

react-bootstrap's Nav.Link component does not have built-in support for active 
link highlighting based on the current route. This feature is, however, available 
in the NavLink component from react-router-dom.

Moreover, react-router-dom v6 replaced the exact prop with the useMatch hook and 
does not support the activeClassName prop, which was used in v5 for active link 
styling. Therefore, the traditional way of making a link active in 
react-router-dom v5 doesn't work anymore in v6.

In order to enjoy the benefits of both libraries (the Bootstrap styling and the
     routing logic of React Router), a custom component CustomLink is created.

The CustomLink component is a combination of both worlds: it uses the Link
 component from react-router-dom to handle the routing, and wraps it with the
  Nav.Link component from react-bootstrap to keep the Bootstrap styles. The 
  useMatch hook from react-router-dom is used to check if the current path is 
  the one pointed by the link (it acts like the exact prop in v5). If it's
   a match, the 'active' class is added to the link.

Therefore, the CustomLink component allows us to use react-bootstrap for its 
styles while also maintaining the routing and active link features from 
react-router-dom.
*/