import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { List } from 'react-bootstrap-icons';
import { Container, Row, Col, Table, Alert, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';

import swal from 'sweetalert2';

import InputMask from 'react-input-mask';
import NumberFormat from 'react-number-format';

import { detalheSimulacao, buscarHistoricoSimulacoes } from '../../actions/simulador';


class Index extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cpfComprador: undefined
        }
    }

    onBuscarHistorico = () => {
        const dadosValidos = this.validaDadosSimulador();
        
        if(dadosValidos)
            this.props.buscarHistoricoSimulacoes({...this.state});
    }

    validaDadosSimulador = () => {

        if(!this.cpfCompradorEhValidos()) {
            return this.swalErro({ 
                title: 'CPF do comprador inválido', 
                text: 'CPF do comprador está inválido, digite um valor valido!' 
            });
        }

        return true;
    }

    cpfCompradorEhValidos = () => {
        const cpfComprador = this.state.cpfComprador;

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

    renderTooltipDetalheSimulacao = (props) => {
        return <Tooltip {...props}>Detalhe da Simulação</Tooltip>;
    }

    renderSimulacao = (simulacao, index) => {
        return (
            <tr key={index}>
                <td>{simulacao.id}</td>
                <td>
                    <NumberFormat 
                        prefix={'R$ '}
                        decimalScale={2}
                        displayType={'text'}
                        allowNegative={false}
                        decimalSeparator={','}
                        thousandSeparator={'.'} 
                        fixedDecimalScale={true}
                        value={simulacao.valorCompra} 
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
                        value={simulacao.valorJuros} 
                    />     
                </td>
                <td>
                    <NumberFormat 
                        prefix={'R$ '}
                        decimalScale={2}
                        displayType={'text'}
                        allowNegative={false}
                        decimalSeparator={','}
                        thousandSeparator={'.'} 
                        fixedDecimalScale={true}
                        value={simulacao.valorTotal} 
                    />  
                </td>
                <td>
                    <NumberFormat
                        prefix={'x '}
                        decimalScale={2}
                        displayType={'text'}
                        allowNegative={false}
                        decimalSeparator={','}
                        thousandSeparator={'.'} 
                        value={simulacao.quantidadeParecelas} 
                    />
                </td>
                <td>{simulacao.dataCompra}</td>
                <td>
                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 50, hide: 150 }}
                        overlay={this.renderTooltipDetalheSimulacao}
                    >
                        <List 
                        size={40}
                        onClick={() => this.props.detalheSimulacao(simulacao)}
                        ></List>
                    </OverlayTrigger>
                </td>
            </tr>
        )
    };

    renderHistorico = () => {
        const buscarSimulacoesStatus = this.props.buscarSimulacoesStatus;
        const existeSimulacoes = this.props.simulacoes && this.props.simulacoes.length > 0;

        if(buscarSimulacoesStatus === false || buscarSimulacoesStatus === undefined)
            return;
        
        if(!existeSimulacoes)
            return (
                <Col md={{ span: 8, offset: 2 }}>
                    <Alert variant={'info'}>
                        <b>Não existe histórico cadastrador para esse CPF</b>
                    </Alert>
                </Col>
            );

        return (
            <>
                <Col md={12}><h4>Histórico</h4></Col>
                <Col md={12} className="text-center">
                    <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Valor</th>
                            <th>Juros</th>
                            <th>Valor Final</th>
                            <th>Parcelas</th>
                            <th>Data Compra</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.simulacoes.map((simulacao, i) => {
                                return this.renderSimulacao(simulacao, i);
                            })
                        }
                    </tbody>
                </Table>
                </Col>
            </>
        );
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col cols={{ sm: 12 }} className="text-center">
                        <h1>Histórico de Parcelas/Juros</h1>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col md={{ span: 8, offset: 2 }}>
                        <Alert variant={'info'}>
                            <b>Preencha o CPF para consultar o histório</b>
                        </Alert>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 5, offset: 2 }}>
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
                    <Col md={3}>
                        <Button 
                            size="lg" 
                            variant="primary" 
                            className='btn-block'
                            onClick={this.onBuscarHistorico}
                        >
                            Buscar Histórico
                        </Button>
                    </Col>
                </Row>
                <Row className="mt-5">
                    {this.renderHistorico()}
                </Row>
            </Container>
        );
    }
}


const mapStateToProps = state => ({
    simulacoes: state.reducers.simulador.simulacoes,
    buscarSimulacoesStatus: state.reducers.simulador.buscarSimulacoesStatus
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        detalheSimulacao,
        buscarHistoricoSimulacoes
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Index);