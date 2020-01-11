import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas/index';
import reducers from '../reducers/index';


const sagaMiddleware = createSagaMiddleware();


const store = createStore(
    combineReducers({
        reducers
    }),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store