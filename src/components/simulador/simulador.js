import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Alert, Row, Col, Form, Button } from 'react-bootstrap';

import swal from 'sweetalert2';

import InputMask from 'react-input-mask';
import NumberFormat from 'react-number-format';

import { calcularSimulacao } from '../../actions/simulador';


class Simulador extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            valorTotal: 325.23,
            valorJuros: 5.7525,
            qtoParcelas: 10,
            dataCompra: '01/01/2020',
            cpfComprador: undefined,
            salvarSimulacao: false
        }
    }

    onSimulador = () => {
        const dadosValidos = this.validaDadosSimulador();
        
        if(dadosValidos)
            this.props.calcularSimulacao({...this.state});
    }

    validaDadosSimulador = () => {

        if(!this.valorTotalEhValidos()) {
            return this.swalErro({ 
                title: 'Valor total inválido', 
                text: 'Valor total está inválido, digite um valor valido!' 
            });
        }

        if(!this.valorJurosEhValidos()) {
            return this.swalErro({ 
                title: 'Valor de juros inválido', 
                text: 'Valor de juros está inválido, digite um valor valido!' 
            });
        }

        if(!this.quantidadeParcelasEhValidos()) {
            return this.swalErro({ 
                title: 'Quantidade de parecelas inválido', 
                text: 'Quantidade de parecelas está inválido, digite um valor valido!' 
            });
        }

        if(!this.dataCompraEhValidos()) {
            return this.swalErro({ 
                title: 'Data da compra inválido', 
                text: 'Data da compra está inválido, digite um valor valido!' 
            });
        }

        if(!this.cpfCompradorEhValidos()) {
            return this.swalErro({ 
                title: 'CPF do comprador inválido', 
                text: 'CPF do comprador está inválido, digite um valor valido!' 
            });
        }

        return true;
    }

    valorTotalEhValidos = () => {
        const valorTotal = this.state.valorTotal;

        if(!valorTotal || valorTotal === 0)
            return false;

        return true;
    }

    valorJurosEhValidos = () => {
        const valorJuros = this.state.valorJuros;

        if(!valorJuros || valorJuros === 0)
            return false;

        return true;
    }

    quantidadeParcelasEhValidos = () => {
        const qtoParcelas = this.state.qtoParcelas;

        if(!qtoParcelas || qtoParcelas < 2)
            return false;

        return true;
    }

    dataCompraEhValidos = () => {
        const dataCompra = this.state.dataCompra;

        if(!dataCompra || dataCompra.indexOf('_') > -1)
            return false;
            
        const valores = dataCompra.split('/');
        const dia = Number(valores[0]);
        const mes = Number(valores[1]);
        const ano = Number(valores[2]);

        if(dia < 1 || dia > 31 || mes < 1 || mes > 12 || ano < 1)
            return false;

        if((mes === 2 && dia > 29) ||
           (mes === 4 && dia > 30) ||
           (mes === 6 && dia > 30) ||
           (mes === 9 && dia > 30) ||
           (mes === 11 && dia > 30))
            return false;

        return true;
    }

    cpfCompradorEhValidos = () => {
        const cpfComprador = this.state.cpfComprador;

        if(!this.state.salvarSimulacao)
            return true;

        if(!cpfComprador || cpfComprador.indexOf('_') > -1)
            return false;

        return true;
    }

    swalErro = (erro) => {
        setTimeout(() => {
            swal({
                timer: 10000,
                type: 'error',
                text: erro.text,
                title: erro.title
            })}, 500)

        return false;
    }


    render() {
        return (
            <>
                <Row className="text-center">
                    <Col md={{ span: 8, offset: 2 }}>
                        <Alert variant={'info'}>
                            <b>Preencha todos os campos pra simular</b>
                        </Alert>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <Form>
                            <Form.Group>
                                <Form.Label column sm="12"><b>Valor Total</b></Form.Label>
                                <Col sm="5">
                                    <NumberFormat 
                                        prefix={'R$ '}
                                        decimalScale={2}
                                        allowNegative={false}
                                        decimalSeparator={','}
                                        thousandSeparator={'.'} 
                                        fixedDecimalScale={true}
                                        customInput={Form.Control}
                                        value={this.state.valorTotal} 
                                        className='text-center form-control form-control-lg'
                                        onValueChange={(event) => this.setState({ valorTotal: event.floatValue })}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label column sm="12"><b>Valor do Juros</b></Form.Label>
                                <Col sm="5">
                                    <NumberFormat 
                                        prefix={'% '}
                                        decimalScale={4}
                                        allowNegative={false}
                                        decimalSeparator={','}
                                        thousandSeparator={'.'} 
                                        fixedDecimalScale={true}
                                        customInput={Form.Control}
                                        value={this.state.valorJuros} 
                                        className='text-center form-control form-control-lg'
                                        onValueChange={(event) => this.setState({ valorJuros: event.floatValue })}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label column sm="12"><b>Quantidade de Parcelas</b></Form.Label>
                                <Col sm="5">
                                    <NumberFormat 
                                        prefix={'x '}
                                        decimalScale={2}
                                        allowNegative={false}
                                        decimalSeparator={','}
                                        thousandSeparator={'.'} 
                                        customInput={Form.Control}
                                        value={this.state.qtoParcelas} 
                                        className='text-center form-control form-control-lg'
                                        onValueChange={(event) => this.setState({ qtoParcelas: event.floatValue })}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label column sm="12"><b>Data da Compra</b></Form.Label>
                                <Col sm="5">
                                    <InputMask
                                        type='text'
                                        maskChar='_'
                                        mask={'99/99/9999'}
                                        alwaysShowMask={true}
                                        defaultValue={this.state.dataCompra}
                                        className="text-center form-control form-control-lg"
                                        onChange={(event) => this.setState({
                                            dataCompra: event.target.value
                                        }) }
                                    />
                                </Col>
                            </Form.Group>
                            
                            <Form.Group>
                                <Col sm="5">
                                    <Form.Check 
                                        size="lg" 
                                        type="checkbox" 
                                        label="Salvar simulação"
                                        onChange={() => this.setState({ salvarSimulacao: !this.state.salvarSimulacao }) } />
                                </Col>
                            </Form.Group>
                            
                            { this.state.salvarSimulacao ? 
                                <Form.Group>
                                    <Form.Label column sm="12"><b>Cpf do Comprador</b></Form.Label>
                                    <Col sm="5">
                                        <InputMask
                                            type='text'
                                            maskChar='_'
                                            alwaysShowMask={true}
                                            mask={'999.999.999-99'}
                                            className="text-center form-control form-control-lg"
                                            onChange={(event) => this.setState({
                                                cpfComprador: event.target.value
                                            }) }
                                        />
                                    </Col>
                                </Form.Group>
                                : null
                            }
                            
                            <Form.Group>
                                <Col sm="5">
                                    <Button variant="primary"
                                        onClick={this.onSimulador}>
                                        Simular
                                    </Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </>
        );
    }
}


const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        calcularSimulacao: calcularSimulacao
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Simulador);