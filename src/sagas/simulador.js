import { takeEvery, put, call } from 'redux-saga/effects';

import {
    SIMULADOR,
    SIMULADOR_ERRO,
    SIMULADOR_SUCESSO
} from '../actions/index';

import {
    API_COMPRADOR
} from '../util';


export function* simulador(params) {
    const uri = `${API_COMPRADOR}/simulador`;

    try {
        const data = yield call(fetch, uri, {
            method: 'POST',
            headers: {
                "Accept": "application/pdf",
                "Content-type": "application/json",
            },
            body: JSON.stringify({...params.data})
        });

        if (data.status < 200 || data.status >= 300) {
            const error = yield call([data, 'json'])

            throw new Error(JSON.stringify(error));
        }

        const jsonData = yield call([data, 'json'])

        yield put({ type: SIMULADOR_SUCESSO, payload: jsonData });
    } catch (error) {
        yield put({ type: SIMULADOR_ERRO, payload: error });
    }
}

export function* watchSimulador() {
    yield takeEvery(SIMULADOR, simulador);
}