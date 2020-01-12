import {
    SIMULADOR,
    LIMPAR_SIMULADOR
} from './index.js';


export function simulador(params) {
    return {
        type: SIMULADOR,
        data: { ...params }
    };
}

export function limparSimulador() {
    return {
        type: LIMPAR_SIMULADOR
    };
}