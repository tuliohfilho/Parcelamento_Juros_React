import { all } from "redux-saga/effects";

import { watchObterComprador } from './comprador';
import { watchCalcularSimulacao, watchBuscarHistoricoSimulacoes } from './simulador';


export default function* rootSaga() {
    yield all([
        watchObterComprador(),
        watchCalcularSimulacao(),
        watchBuscarHistoricoSimulacoes()
    ]);
}