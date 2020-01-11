import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";


class Index extends Component {
    render() {
        return (
            <>
                <h1>Calculadora Parecelas/Juros</h1>
                <h1>Comprador Index 3 ({this.props.comprador})</h1>
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