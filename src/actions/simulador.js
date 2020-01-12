import {
    CALCULAR_SIMULACAO,
    LIMPAR_CALCULAR_SIMULACAO,
    BUSCAR_HISTORICO_SIMULACOES,
    LIMPAR_BUSCAR_HISTORICO_SIMULACOES,
    DETALHE_SIMULACAO
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

export function buscarHistoricoSimulacoes(cpf) {
    return {
        type: BUSCAR_HISTORICO_SIMULACOES,
        data: cpf
    };
}

export function limparBuscarHistoricoSimulacoes() {
    return {
        type: LIMPAR_BUSCAR_HISTORICO_SIMULACOES
    };
}

export function detalheSimulacao(simulacao) {
    return {
        type: DETALHE_SIMULACAO,
        data: { ...simulacao }
    };
}
