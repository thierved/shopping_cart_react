import {ADD_TO_CHART} from '../actions';
import data from '../data.json';

export function addItemToBag(state = [], action) {
    switch (action.type) {
        case ADD_TO_CHART:
            return [...state,
                 ...data.filter(item => data[item.id] === data[action.payload])];    
        default:
            return state;
    }
}