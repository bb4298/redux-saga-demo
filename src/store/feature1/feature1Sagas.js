import {call, put} from 'redux-saga/effects';
import {takeLatest} from 'redux-saga/effects';
import axios from 'axios';
export function* sagasRequest(){
/*     try{
        const response = yeild call(() =>{
            let res =  axios({
                method: 'get',
                url: 'https://5fb24db487ed490016ea8bb3.mockapi.io/users',
            });
            console.log(res);
            return res;
        });
    }  
    catch{
        console.log("loi fetch api");
    } */
    let data;
    yield axios.get('https://5fb24db487ed490016ea8bb3.mockapi.io/users').then((res)=>{
        data = res.data;
        console.log(data);
    });
    yield put({type:'SET_ASYNC_DATA',payload:data});

}

export function* feature1Sagas(){
    yield takeLatest('GET_ASYNC_DATA',sagasRequest);
}