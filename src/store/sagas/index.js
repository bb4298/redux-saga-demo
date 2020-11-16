import {fork, all} from 'redux-saga/effects';
import {feature1Sagas} from '../feature1/feature1Sagas';
export function* watchSagas(){
    yield all([feature1Sagas()]);
}
