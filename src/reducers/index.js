import { combineReducers } from "redux";

import comprador from './comprador';
import simulador from './simulador';


const storeApp = combineReducers({
    comprador,
    simulador
});

export default storeApp;