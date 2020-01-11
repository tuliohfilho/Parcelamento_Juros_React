import { all } from "redux-saga/effects";

import { watchObterComprador } from './comprador';


export default function* rootSaga() {
    yield all([
        watchObterComprador()
    ]);
}