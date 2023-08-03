// file bottom-nav.js

import Nav from 'react-bootstrap/Nav';

function BottomNav() {
  return (
    <Nav className="nav-centered nav-item-fill nav-link-dark mt-3">
      <Nav.Item>
        <Nav.Link href="/welcome">Welcome</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="/playlist">Playlist</Nav.Link>
      </Nav.Item>
      
      <Nav.Item>
        <Nav.Link href="/advertisement">Book Advertisement</Nav.Link>
      </Nav.Item>
      
      <Nav.Item>
        <Nav.Link href="employees">Employees</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default BottomNav;