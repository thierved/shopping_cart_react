const ADD_TO_CHART = "ADD_TO_CHART";

const addToChart = (id) => {
    return {
        type: ADD_TO_CHART,
        payload: id
    }
}

export { addToChart, ADD_TO_CHART};