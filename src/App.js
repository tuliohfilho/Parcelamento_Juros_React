import React from 'react';

import { Provider } from 'react-redux';
import { Route, Router, hashHistory } from "react-router";

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './templates/header';
import Footer from './templates/footer';
import CompradorIndex from './components/comprador/index';
import CompradorIndex2 from './components/comprador/index2';
import CompradorIndex3 from './components/comprador/index3';

import store from './store/index';


function App() {
  return (
    <Provider store={store}>
      <Header />
        <Router history={hashHistory}>
          <Route exact={true} path="/" component={CompradorIndex} />
          <Route exact={true} path="/home1" component={CompradorIndex} />
          <Route exact={true} path="/home2" component={CompradorIndex2} />
          <Route exact={true} path="/home3" component={CompradorIndex3} />
        </Router>
      <Footer />
    </Provider>
  );
}

export default App;
