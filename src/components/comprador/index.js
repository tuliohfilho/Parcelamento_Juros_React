import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Index extends Component {

    render() {
        return (
            <h1>Comprador Index</h1>
        );
    }
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch =>
    bindActionCreators({

    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Index);