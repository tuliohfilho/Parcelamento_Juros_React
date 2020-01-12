import { takeEvery, put, call } from 'redux-saga/effects';

import {
    OBTER_COMPRADOR,
    OBTER_COMPRADOR_ERRO,
    OBTER_COMPRADOR_SUCESSO
} from '../actions/index';

import {
    API_PARCELAJENTO_JUROS
} from '../util';


export function* obterComprador(params) {
    const uri = `${API_PARCELAJENTO_JUROS}/comprador/cpf/comanda/${'params.data.cpf'}`;

    try {
        const data = yield call(fetch, uri);

        if (data.status < 200 || data.status >= 300) {
            const error = yield call([data, 'json'])

            throw new Error(JSON.stringify(error));
        }

        const blob = yield data.blob();

        yield put({ type: OBTER_COMPRADOR_SUCESSO, payload: blob });
    } catch (error) {
        yield put({ type: OBTER_COMPRADOR_ERRO, payload: error });
    }
}

export function* watchObterComprador() {
    yield takeEvery(OBTER_COMPRADOR, obterComprador);
}