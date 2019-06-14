const initialState = {
    models: {},
};

export const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case "UPDATE":
            break;
        case "ADD":

            let newState = Object.assign({}, state);

            newState.models[action.model] = action.resource;
            return newState;

            break;
        default:
            return state;

    }
};
