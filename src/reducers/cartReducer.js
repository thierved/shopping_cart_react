import {ADD_TO_CART, REMOVE_FROM_CART} from '../actions';
import data from '../data.json';

export default function Cart(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                 ...data.filter(item => data[item.id] === data[action.payload])
                ]; 
        case REMOVE_FROM_CART:
            return [
                ...state.filter(item => item.id !== action.id)
            ];
        default:
            return state;
    }
}