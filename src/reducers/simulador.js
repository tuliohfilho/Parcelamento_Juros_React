import {
    CALCULAR_SIMULACAO,
    CALCULAR_SIMULACAO_ERRO,
    LIMPAR_CALCULAR_SIMULACAO,
    CALCULAR_SIMULACAO_SUCESSO,

    BUSCAR_HISTORICO_SIMULACOES,
    BUSCAR_HISTORICO_SIMULACOES_ERRO,
    LIMPAR_BUSCAR_HISTORICO_SIMULACOES,
    BUSCAR_HISTORICO_SIMULACOES_SUCESSO,

    DETALHE_SIMULACAO
} from '../actions';

import swal from 'sweetalert2';


const INITIAL_STATE = {
    simulacao: { parecelas: [] },
    simulacoes: undefined,
    simulacaoForm: undefined,
    simuladorStatus: undefined,
    buscarSimulacoesStatus: undefined
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case CALCULAR_SIMULACAO: {
            return {
                ...state,
                simulacao: undefined,
                simuladorStatus: undefined,
                simulacaoForm: action.data
            };
        }       
        case LIMPAR_CALCULAR_SIMULACAO: {
            return {
                ...state,
                simulacao: undefined,
                simulacaoForm: undefined,
                simuladorStatus: undefined
             };
        }
        case CALCULAR_SIMULACAO_ERRO: {
            setTimeout(() => {
                swal({
                    type: 'error',
                    title: 'Falha no Simulador!',
                    text: 'Preencha todos os campos corretamente',
                    timer: 10000
                })}, 500)

            return {
                ...state,
                simulacao: undefined,
                simuladorStatus: false
            };
        }
        case CALCULAR_SIMULACAO_SUCESSO: {
            setTimeout(() =>
                swal({
                    type: 'success',
                    title: 'Simulação com sucesso!',
                    text: '',
                    timer: 10000
                }), 500);

                window.location.href = "#/simulador/detalhe";

            return {
                ...state, 
                simuladorStatus: true,
                simulacao: action.payload
            };
        }

        case BUSCAR_HISTORICO_SIMULACOES: {
            return {
                ...state,
                simulacoes: undefined,
                buscarSimulacoesStatus: undefined
            };
        }
        case LIMPAR_BUSCAR_HISTORICO_SIMULACOES: {
            return {
                ...state,
                simulacoes: undefined,
                buscarSimulacoesStatus: undefined
             };
        }
        case BUSCAR_HISTORICO_SIMULACOES_ERRO: {
            setTimeout(() => {
                swal({
                    type: 'error',
                    title: 'Falha ao Buscar as Simulações!',
                    text: 'Preencha um CPF válido e tente novamente',
                    timer: 10000
                })}, 500)

            return {
                ...state,
                simulacoes: undefined,
                buscarSimulacoesStatus: false
            };
        }
        case BUSCAR_HISTORICO_SIMULACOES_SUCESSO: {
            return {
                ...state, 
                simulacoes: action.payload,
                buscarSimulacoesStatus: true
            };
        }

        case DETALHE_SIMULACAO: {
            window.location.href = "#/simulador/detalhe";

            return {
                ...state, 
                simuladorStatus: true,
                simulacao: action.data
            };
        }

        default:
            return { ...state };
    }
};