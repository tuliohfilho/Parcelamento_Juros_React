import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Container, Row, Col } from 'react-bootstrap';

import Simulador from './simulador';


class Index extends Component {
    
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col cols={{ sm: 12 }} className="text-center">
                            <h1>Simulador de Parecelas/Juros</h1>
                        </Col>
                    </Row>
                    <Simulador />
                </Container>
            </>
        );
    }
}


const mapStateToProps = state => ({
    comprador: state.reducers.comprador.comprador
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({

    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Index);