import Nav from 'react-bootstrap/Nav';

function BottomNav() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`Target not set, selected key '${selectedKey}'`)}
    >
    <description>Footer von PS</description>
      <Nav.Item>
        <Nav.Link href="show impress">Impressum</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="show privacy protection">Datenschutz</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default BottomNav;