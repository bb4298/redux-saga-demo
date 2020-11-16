import {combineReducers} from 'redux';
import randomReducer from './randomReducer';
import feature1Reducer from '../store/feature1/feature1Reducer';
import asyncDataReducer from './asyncDataReducer';
const allReducer = combineReducers({
    randomReducer,
    feature1Reducer,
    asyncDataReducer,
});

export default allReducer;