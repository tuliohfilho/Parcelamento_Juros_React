import { takeEvery, put, call } from 'redux-saga/effects';

import {
    CALCULAR_SIMULACAO,
    CALCULAR_SIMULACAO_ERRO,
    CALCULAR_SIMULACAO_SUCESSO,
    BUSCAR_HISTORICO_SIMULACOES,
    BUSCAR_HISTORICO_SIMULACOES_ERRO,
    BUSCAR_HISTORICO_SIMULACOES_SUCESSO
} from '../actions/index';

import {
    API_COMPRADOR
} from '../util';


export function* calcularSimulacao(params) {
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

        yield put({ type: CALCULAR_SIMULACAO_SUCESSO, payload: jsonData });
    } catch (error) {
        yield put({ type: CALCULAR_SIMULACAO_ERRO, payload: error });
    }
}

export function* buscarHistoricoSimulacoes(payload) {
    const uri = `${API_COMPRADOR}/simulador/cpf/${payload.data.cpfComprador}`;

    try {
        const data = yield call(fetch, uri);

        if (data.status < 200 || data.status >= 300) {
            const error = yield call([data, 'json'])

            throw new Error(JSON.stringify(error));
        }

        const jsonData = yield call([data, 'json'])

        yield put({ type: BUSCAR_HISTORICO_SIMULACOES_SUCESSO, payload: jsonData });
    } catch (error) {
        yield put({ type: BUSCAR_HISTORICO_SIMULACOES_ERRO, payload: error });
    }
}


export function* watchCalcularSimulacao() {
    yield takeEvery(CALCULAR_SIMULACAO, calcularSimulacao);
}

export function* watchBuscarHistoricoSimulacoes() {
    yield takeEvery(BUSCAR_HISTORICO_SIMULACOES, buscarHistoricoSimulacoes);
}