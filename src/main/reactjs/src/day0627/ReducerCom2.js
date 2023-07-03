import React from 'react';
import { flushSync } from 'react-dom';


const initialState={
    count:1,
    students:[
        {
            id:new Date(),
            name:'이영자',
            isHere:false
        }
    ]
}

const reducer=(state,action)=>{
    console.log(state,action);

    switch(action.type){
        case 'add-student':
            const name=action.payload.name;
            const addStudent={
                id:new Date(),
                name,
                isHere:false
            }
            const data={
                count:state.count+1,
                students:[
                    ...state.students,
                    addStudent
                ]
            }
            return data;
        case 'delete-student':
            return{
                count:state.count-1,
                students:
                    state.students.filter(s=>s.id!==action.payload.id)
            };
         case 'mark-student':
            return{
                count:state.count,
                students:
                    state.students.map(s=>{
                        if(s.id===action.payload.id){
                            return {...s,isHere:!s.isHere}
                        }
                        return s;
                    })
            };   
            default:
                return state;
            
    }
}

function ReducerCom2(props) {
    return (
        <div>
            <h2>Reducer 비트캠프 701호에 오신것을 환영합니다</h2>

            <h4>총 학생수 {studentInfo.count}명</h4>
            <div>
                <input type='text' value={name}
                    onChange={(e)=>setName(e.target.value)}/>

            </div>
        </div>
    );
}

export default ReducerCom2;