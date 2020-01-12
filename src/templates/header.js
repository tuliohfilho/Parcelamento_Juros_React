import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';


function Header() {
    return (
        <>
            <Navbar bg="primary" variant="dark" fixed="top">
                <Navbar.Brand href="/">Fortes</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#/">Simulador</Nav.Link>
                    <Nav.Link href="#/">Histórico</Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
}

export default Header;