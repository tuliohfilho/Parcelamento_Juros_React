import React from 'react';

import { Provider } from 'react-redux';

import store from './store/index';

import CompradorIndex from './components/comprador/index';

function App() {
  return (
    <Provider store={store}>
      <h1>Calculadora Parecelas/Juros</h1>
      <CompradorIndex />
    </Provider>
  );
}

export default App;
