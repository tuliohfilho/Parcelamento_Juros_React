import React from 'react';

import { Provider } from 'react-redux';
import { Route, Router, hashHistory } from "react-router";

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './templates/header';
import Footer from './templates/footer';
import SimuladorIndex from './components/simulador/index';
import SimuladorDetalhe from './components/simulador/detalhe';

import store from './store/index';


function App() {
  return (
    <Provider store={store}>
      <Header />
        <Router history={hashHistory}>
          <Route exact={true} path="/" component={SimuladorIndex} />
          <Route exact={true} path="/simulador/detalhe" component={SimuladorDetalhe} />
        </Router>
      <Footer />
    </Provider>
  );
}

export default App;
