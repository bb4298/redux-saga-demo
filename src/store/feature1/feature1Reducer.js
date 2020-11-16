const defaultState = {};

const feature1Reducer = (state = defaultState, action) =>{
    switch(action.type){
        case 'GETDATA_RECIVE':{
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
};

export default feature1Reducer;