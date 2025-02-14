import React, { useContext } from 'react';
import logo from '../../assets/logo.svg';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Form } from 'react-bootstrap';
import './Navbar.css';

const CustomNavbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const CurrencyHandler = (e) => {
    switch (e.target.value) {
      case 'usd': {
        setCurrency({ name: 'usd', symbol: '$' });
        break;
      }
      case 'eur': {
        setCurrency({ name: 'eur', symbol: '€' });
        break;
      }
      case 'inr': {
        setCurrency({ name: 'inr', symbol: '₹' });
        break;
      }
      default: {
        setCurrency({ name: 'usd', symbol: '$' });
        break;
      }
    }
  };

  return (
    <Navbar expand="lg" className="custom-navbar shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="logo" width="80" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
          </Nav>
          <Form.Select 
            onChange={CurrencyHandler} 
            className="me-3 select-currency" 
            style={{ width: '100px', padding: '5px', fontSize: '14px' }}
          >
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
          </Form.Select>
          <br />
          <Button variant="outline-light" className="sign-up">Sign Up</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
