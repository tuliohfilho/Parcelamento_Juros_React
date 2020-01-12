import {
    SIMULADOR,
    SIMULADOR_ERRO,
    LIMPAR_SIMULADOR,
    SIMULADOR_SUCESSO
} from '../actions';

import swal from 'sweetalert2';


const INITIAL_STATE = {
    simulacao: { parecelas: [] },
    simulacoes: undefined,
    simuladorStatus: undefined
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case SIMULADOR: {
            return { ...state, comprador: undefined, simuladorStatus: undefined, simulacao: undefined };
        }
        
        case LIMPAR_SIMULADOR: {
            return { ...state, comprador: undefined, simuladorStatus: undefined, simulacao: undefined };
        }

        case SIMULADOR_ERRO: {
            setTimeout(() => {
                swal({
                    type: 'error',
                    title: 'Falha no Simulador!',
                    text: 'Preencha todos os campos corretamente',
                    timer: 10000
                })}, 500)

            return { ...state, comprador: undefined, simuladorStatus: false, simulacao: undefined };
        }

        case SIMULADOR_SUCESSO: {
            setTimeout(() =>
                swal({
                    type: 'success',
                    title: 'Simulação com sucesso!',
                    text: '',
                    timer: 10000
                }), 500);

                window.location.href = "#/simulador/detalhe";

            return { ...state, comprador: action.payload, simuladorStatus: true, simulacao: action.payload };
        }

        default:
            return { ...state };
    }
};