import React from 'react';
import { NavLink } from 'react-router-dom';
import noimage from '../noimage2.jpg';

function BoardRowList(props) {
    const {idx,no,row,currentPage}=props;
    const smallurl1=process.env.REACT_APP_SMALL_BOARDURL1;
    const smallurl2=process.env.REACT_APP_SMALL_BOARDURL2;
    
    return (
        <tr>
            <td>{no-idx}</td>
            <td>
                <NavLink to={`/rboard/detail/${row.num}/${currentPage}`} 
                style={{textDecoration:'none',color:'black',cursor:'pointer'}}>
                 {/* 40x40 썸네일 이미지 나오게 하기(사진이 없을경우 noimage 로 대치) */}
                {
                    row.photo==null?
                        <img alt='' src={noimage}
                                style={{width:'40px',height:'40px',border:'1px solid black',
                                marginRight:'10px'}}/>:
                        <img alt='' src={`${smallurl1}${row.photo}${smallurl2}`}
                                style={{border:'1px solid black',
                                marginRight:'10px'}}/>
                }
                 <b>{row.subject}</b>                 
                </NavLink>
            </td>
            <td>{row.myname}</td>
            <td align='center'>{row.writeday.substring(0,10)}</td>
            <td align='center'>{row.readcount}</td>
        </tr>
    );
}

export default BoardRowList;