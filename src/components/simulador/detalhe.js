import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import NumberFormat from 'react-number-format';

import { Container, Row, Col, Table } from 'react-bootstrap';


class Detalhe extends Component {
    
    renderParcela = (parcela, index) => {
        return (
            <tr>
                <td>{index + 1}</td>
                <td>
                    <NumberFormat 
                        prefix={'R$ '}
                        decimalScale={2}
                        displayType={'text'}
                        allowNegative={false}
                        decimalSeparator={','}
                        thousandSeparator={'.'} 
                        fixedDecimalScale={true}
                        value={parcela.valorParcela} 
                    />  
                </td>
                <td>
                    <NumberFormat 
                        prefix={'% '}
                        decimalScale={4}
                        displayType={'text'}
                        allowNegative={false}
                        decimalSeparator={','}
                        thousandSeparator={'.'} 
                        fixedDecimalScale={true}
                        value={parcela.valorJuros} 
                    />     
                </td>
                <td>{parcela.dataVencimento}</td>
            </tr>
        )
    };

    renderParcelas = () => {
        const parcelas = this.props.simulacao.parcelas;

        return (
            parcelas.map((parcela, i) => {
                return this.renderParcela(parcela, i);
            })
        );
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col md={12} className="text-center">
                            <h1>Detalhe da Simulação</h1>
                        </Col>
                    </Row>
                    <Row className="mt-5 text-center">
                        <Col md={12} className="text-left"><h4>Dados</h4></Col>
                        <Col md={3}>
                            <b>Valor Da Compra: </b><br />
                            <NumberFormat 
                                prefix={'R$ '}
                                decimalScale={2}
                                displayType={'text'}
                                allowNegative={false}
                                decimalSeparator={','}
                                thousandSeparator={'.'} 
                                fixedDecimalScale={true}
                                value={this.props.simulacao.valorCompra} 
                            />
                        </Col>
                        <Col md={3}>
                            <b>Valor de Juros: </b><br />
                            <NumberFormat 
                                prefix={'% '}
                                decimalScale={4}
                                displayType={'text'}
                                allowNegative={false}
                                decimalSeparator={','}
                                thousandSeparator={'.'} 
                                fixedDecimalScale={true}
                                value={this.props.simulacao.valorJuros} 
                            />
                        </Col>
                        <Col md={3}>
                            <b>Quantidade de Parcelas: </b><br />
                            <NumberFormat
                                prefix={'x '}
                                decimalScale={2}
                                displayType={'text'}
                                allowNegative={false}
                                decimalSeparator={','}
                                thousandSeparator={'.'} 
                                value={this.props.simulacao.quantidadeParecelas} 
                            />
                        </Col>
                        <Col md={3}>
                            <b>Data da Compra: </b><br />
                            {this.props.simulacao.dataCompra}
                        </Col>
                    </Row>
                    <Row className="mt-5">
                    <Col md={12}><h4>Parcelas</h4></Col>
                        <Col md={12} className="text-center">
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
                                {this.renderParcelas()}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td></td>
                                    <td>
                                        <NumberFormat 
                                            prefix={'R$ '}
                                            decimalScale={2}
                                            displayType={'text'}
                                            allowNegative={false}
                                            decimalSeparator={','}
                                            thousandSeparator={'.'} 
                                            fixedDecimalScale={true}
                                            value={this.props.simulacao.valorTotal}
                                        />
                                    </td>
                                    <td colSpan={2}></td>
                                </tr>
                            </tfoot>
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