import { AGREGAR_ITEM_CARRO, ELIMINAR_ITEM_CARRO } from '../actions/projectActions';

const initState = {
    carro: []
}

export const carroReducer = (state = initState, action) => {
    switch (action.type) {
        case AGREGAR_ITEM_CARRO:
            return;
        case ELIMINAR_ITEM_CARRO:
            return;
        default:
            return state;
    }
}

