import {
    OBTER_COMPRADOR,
    OBTER_COMPRADOR_ERRO,
    LIMPAR_OBTER_COMPRADOR,
    OBTER_COMPRADOR_SUCESSO
} from '../actions';


const INITIAL_STATE = {
    comprador: undefined,
    obterCompradorStatus: undefined
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case OBTER_COMPRADOR: {
            return { ...state, comprador: undefined, obterCompradorStatus: undefined };
        }
        
        case LIMPAR_OBTER_COMPRADOR: {
            return { ...state, comprador: undefined, obterCompradorStatus: undefined };
        }

        case OBTER_COMPRADOR_ERRO: {
            return { ...state, comprador: undefined, obterCompradorStatus: false };
        }

        case OBTER_COMPRADOR_SUCESSO: {
            return { ...state, comprador: action.payload, obterCompradorStatus: true };
        }

        default:
            return { ...state };
    }
};