import { all } from "redux-saga/effects";

import { watchObterComprador } from './comprador';
import { watchSimulador } from './simulador';


export default function* rootSaga() {
    yield all([
        watchSimulador(),
        watchObterComprador()
    ]);
}