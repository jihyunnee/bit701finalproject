import React, { useReducer, useState } from 'react';
import { act } from 'react-dom/test-utils';


const ACTION_TYPES={
    add:'addmoney',
    sub:'submoney'
}

const reducer=(state,action)=>{
    console.log("reducer가 일을 합니다",state,action);
    switch(action.type){
        case ACTION_TYPES.add:
            return state+Number(action.payload);
        case ACTION_TYPES.sub:
            return state-Number(action.payload);
        default:
            return state;
    }
}

function ReducerCom1(props) {
    const [number,setNumber]=useState(0);
    const [money,dispatch]=useReducer(reducer,0);
    return (
        <div>
            <h3>잔고 : {money}원</h3>
            <input type='number' value={number} step={1000}
            onChange={(e)=>setNumber(e.target.value)}/>
            <br>
            </br>
            
            <button type='button' className='btn'
            onClick={()=>dispatch({'type':ACTION_TYPES.add,payload:number})}>입금</button>
            <button type='button' className='btn'
            onClick={()=>dispatch({'type':ACTION_TYPES.sub,payload:number})}>출금</button>
        </div>
    );
}

export default ReducerCom1;