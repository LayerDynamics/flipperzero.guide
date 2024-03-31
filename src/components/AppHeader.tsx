import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '/logos/orange_text_transparent_white_1000px.png';
import '../styles/index.css';

const AppHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Navbar fixed="top" expand="lg" className="app-header" style={{ backgroundColor: '#FF8200', marginTop: '20px', marginBottom: '100px', boxShadow: '10px 10px 28px rgba(0, 0, 0, 0.559)' }} variant="dark">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')}>
          <img src={logo} height="40" className="d-inline-block align-top" alt="Flipper Zero" /> Guide
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/guide/firmware')}>Newbie Guide</Nav.Link>
            <Nav.Link onClick={() => navigate('/about')}>About</Nav.Link>
            <Nav.Link onClick={() => navigate('/trustedSellers')}>Trusted Sellers</Nav.Link>
						<Nav.Link onClick={()=> navigate('/termainalPage')} className="thisLink" style={{display: 'none'}}>Terminal </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppHeader;
