import React from 'react';

function Student(props) {
    const {stu,dispatch}=props;
    return (
        <div>
            <span 
            style={{textDecoration:stu.isHere?'line-through':'none',cursor:'pointer',
            color:stu.isHere?'gray':'black',display:'inline-block',fontSize:'22px'}}
            onClick={()=>dispatch({type:'mark-student',payload:{id:stu.id}})}>
                {stu.name}
            </span>
            <button type='button' className='btn' onClick={()=>dispatch({type:'delete-student'})}
        </div>
    );
}

export default Student;