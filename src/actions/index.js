export const ADD_TO_CART = "ADD_TO_CHART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToChart = id => {
    return {
        type: ADD_TO_CART,
        payload: id
    }
}

export const removeFromCart = id => {
    return {
        type: REMOVE_FROM_CART,
        id
    }
}
