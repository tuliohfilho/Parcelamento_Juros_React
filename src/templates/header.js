import React from 'react';

import { Navbar } from 'react-bootstrap';


function Header() {
    return (
        <>
            <Navbar bg="primary" variant="dark" fixed="top">
                <Navbar.Brand href="/">Fortes</Navbar.Brand>
            </Navbar>
        </>
    );
}

export default Header;