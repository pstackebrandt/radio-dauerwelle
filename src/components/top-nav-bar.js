import Nav from 'react-bootstrap/Nav';

function TopNavBar() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`Target not set, selected key '${selectedKey}'`)}
    >
      <Nav.Item>
        <Nav.Link href="show program">Programm</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="show playlist">Playlist</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="show links">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="show team">Team</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default TopNavBar;