const defaultState = [];
const asyncDataReducer = (state = defaultState, action) =>{
    switch (action.type) {
        case 'SET_ASYNC_DATA':{
            return [
                ...state,
                ...action.payload
            ]
        }
        default:
            return state;
    }
}

export default asyncDataReducer;