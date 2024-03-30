import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Guide.css';

const GuideNavigation = () => {
  return (
    <Nav
      className="guideNav"
      variant="tabs"
      defaultActiveKey="/guide/firmware"
      style={{
        boxShadow: '10px 10px 28px rgba(0, 0, 0, 0.559)',
      }}
    >
      <Nav.Item>
        <Nav.Link as={Link} to="/guide/Firmware" activeclassname="active-tab">Firmware</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/guide/BadUsb" activeclassname="active-tab">BadUsb</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/guide/Marauder" activeclassname="active-tab">Marauder</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/guide/Apps" activeclassname="active-tab">Apps</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/guide/Infrared" activeclassname="active-tab">Infrared</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/guide/IButton" activeclassname="active-tab">IButton</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/guide/NFC" activeclassname="active-tab">NFC</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/guide/RFID" activeclassname="active-tab">RFID</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/guide/SubGhz" activeclassname="active-tab">SubGhz</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/guide/GPIO" activeclassname="active-tab">GPIO</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/guide/U2f" activeclassname="active-tab">U2f</Nav.Link>
      </Nav.Item>
      {/* Add more Nav.Link components for additional guide parts as needed */}
    </Nav>
  );
}

export default GuideNavigation;
