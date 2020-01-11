import {
    OBTER_COMPRADOR,
    LIMPAR_COMPRADOR
} from './index.js';


export function obterComprador(params) {
    return {
        type: OBTER_COMPRADOR,
        data: { ...params }
    };
}

export function limparComprador() {
    return {
        type: LIMPAR_COMPRADOR
    };
}