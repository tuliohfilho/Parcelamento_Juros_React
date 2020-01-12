import {
    CALCULAR_SIMULACAO,
    LIMPAR_CALCULAR_SIMULACAO
} from './index.js';


export function calcularSimulacao(params) {
    return {
        type: CALCULAR_SIMULACAO,
        data: { ...params }
    };
}

export function limparSimulador() {
    return {
        type: LIMPAR_CALCULAR_SIMULACAO
    };
}