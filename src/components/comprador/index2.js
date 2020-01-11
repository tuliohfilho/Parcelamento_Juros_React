import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { limparComprador } from './../../actions/comprador';

class Index extends Component {

    componentDidMount = () => {
        this.props.limparComprador();
    };

    render() {
        return (
            <>
                <h1>Calculadora Parecelas/Juros</h1>
                <h1>Comprador Index 2 ({this.props.comprador})</h1>
            </>
        );
    }
}


const mapStateToProps = state => ({
    comprador: state.reducers.comprador.comprador
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        limparComprador
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Index);