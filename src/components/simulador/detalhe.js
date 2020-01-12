import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Container, Row, Col, Table } from 'react-bootstrap';


class Detalhe extends Component {
    
    renderParcela = (parcela) => {
        return (
            <tr>
                <td>{parcela.id}</td>
                <td>{parcela.valorParcela}</td>
                <td>{parcela.valorJuros}</td>
                <td>{parcela.dataVencimento}</td>
            </tr>
        )
    };

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col cols={{ sm: 12 }} className="text-center">
                            <h1>Detalhe da Simulação</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col cols={{ sm: 12 }} className="text-center">
                            Valores Dos Campos Em Formato Texto
                        </Col>
                    </Row>
                    <Row>
                        <Col cols={{ sm: 12 }} className="text-center">
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Valor Parcela</th>
                                    <th>Valor Juros</th>
                                    <th>Data Vencimento</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                this.props.simulacao.parcelas.map((parcela, i) => {
                                        return this.renderParcela(parcela);
                                    })
                                }
                            </tbody>
                        </Table>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}


const mapStateToProps = state => ({
    simulacao: state.reducers.simulador.simulacao
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({

    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Detalhe);