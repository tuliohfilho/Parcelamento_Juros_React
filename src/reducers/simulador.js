import {
    CALCULAR_SIMULACAO,
    CALCULAR_SIMULACAO_ERRO,
    LIMPAR_CALCULAR_SIMULACAO,
    CALCULAR_SIMULACAO_SUCESSO
} from '../actions';

import swal from 'sweetalert2';


const INITIAL_STATE = {
    simulacao: { parecelas: [] },
    simulacoes: undefined,
    simulacaoForm: undefined,
    simuladorStatus: undefined
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

        default:
            return { ...state };
    }
};