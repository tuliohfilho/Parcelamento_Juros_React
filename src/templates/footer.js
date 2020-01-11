import React from 'react';

import { Nav, Navbar    } from 'react-bootstrap';


function Footer() {
    return (
        <>
            <Navbar bg="light" variant="light" fixed="bottom">
                <Nav className="mr-auto">
                    <b>Projeto de teste para avaliação técnica no processo seletivo da empresa Grupo Fortes</b>
                </Nav>
            </Navbar>
        </>
    );
}

export default Footer;