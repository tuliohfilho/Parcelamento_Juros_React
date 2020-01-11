import React from 'react';

import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


import store from './store/index';
import CompradorIndex from './components/comprador/index';
import Header from './templates/header';
import Footer from './templates/footer';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <h1>Calculadora Parecelas/Juros</h1>
      <CompradorIndex />
      <Footer />
    </Provider>
  );
}

export default App;
