import React,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
function TrangChu(props) {

    //const [state, setstate] = useState(0);
    const dispatch = useDispatch();
    const randomReducer = useSelector(state => state.randomReducer);
    const asyncDataReducer = useSelector(state => state.asyncDataReducer);
    return (
        <div>
            <div style={{fontSize:200,fontWeight:'bold'}}>
            {randomReducer}
            </div>
            <div >
                <button style={{with:200}} type="button" value="change" onClick={()=>{
                    //setstate(Math.floor(Math.random() * 100));
                    dispatch({type:'RANDOM'});
                }}>Random</button>
            </div>
            <hr></hr>
            <div >
                <button style={{with:200}} type="button" value="change" onClick={()=>{
                    //setstate(Math.floor(Math.random() * 100));
                    dispatch({type:'GET_ASYNC_DATA'});
                }}>Get async data</button>
            </div>
            <hr></hr>
            <div>
               {asyncDataReducer.map((item)=>{
                   return (
                   <h5>{`${item.id}: ${item.name}`}</h5>
                   )
               })}
            </div>
        </div>
    );
}

export default TrangChu;