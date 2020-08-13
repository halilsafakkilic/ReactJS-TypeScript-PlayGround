import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'


export const Header = () => {
    return (<Navbar bg="light" expand="lg">
        <LinkContainer to="/"><Navbar.Brand>React-Playground</Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                <LinkContainer to="/user"><Nav.Link>User</Nav.Link></LinkContainer>
                <Nav.Link href="https://halilsafakkilic.com/?utm_source=myplayground&utm_medium=repository" target="_blank">About Us</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>);
}

export default Header;