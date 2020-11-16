const defaultState = 0;
const randomReducer = (state = defaultState,action) =>{
    switch(action.type){
        case "RANDOM":{
            return Math.floor(Math.random()*100);
        }
        default:
            return state;
    }
}

export default randomReducer;