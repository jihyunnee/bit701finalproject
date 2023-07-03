import Axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function BoardDetailPage(props) {
    const [dto,setDto]=useState({});
    const {num,currentPage}=useParams();

    const navi=useNavigate();

    const photourl=process.env.REACT_APP_BOARDURL;
    const myid=sessionStorage.myid;
    const loginok=sessionStorage.loginok;

    // const selectData=()=>{
    //     const url=`/board/detail?num=${num}`;
    //     Axios.get(url)
    //     .then(res=>{
    //         setDto(res.data);
    //     })
    // }

    // useEffect(()=>{
    //     selectData();       
    // },[]);  
    
    const selectData=useCallback(()=>{
         const url=`/board/detail?num=${num}`;
        // Axios.get(url)
        // .then(res=>{
        //     setDto(res.data);
        // })
        Axios({
            type:'get',
            url,
            headers: {Authorization:`Bearer ${sessionStorage.token}`},
        }).then(res=>{
            setDto(res.data);
         })
    },[num])
    
    useEffect(()=>{
        if(sessionStorage.token==null){
            alert("게시판 내용은 회원만 확인 가능합니다\n먼저 로그인을 해주세요");
            navi("/login");
            return;
        }   
         selectData();       
     },[selectData]); 

    return (
        <div style={{marginLeft:'30px',width:'600px'}}>
            <h5><b>{dto.subject}</b></h5>
            <h6>
                <span>작성자:
                    {dto.myname}({dto.myid && dto.myid.substring(0,3)}***)</span>
                <span style={{float:'right',color:'gray'}}>
                    조회&nbsp;{dto.readcount}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {dto.writeday}
                </span>
            </h6>
            {
                dto.photo==null?'':
                <img alt='' src={`${photourl}${dto.photo}`}
                style={{border:'1px solid gray',maxWidth:'500px'}}/>
            }
            <br/><br/>
            <pre>{dto.content}</pre>
            <br/>
            <div>
                <button type='button' className='btn btn-outline-danger'
                style={{width:'80px',marginRight:'5px'}}
                onClick={()=>navi("/rboard/form")}>글쓰기</button>
               
                <button type='button' className='btn btn-outline-danger'
                style={{width:'80px',marginRight:'5px'}}
                onClick={()=>navi(`/rboard/list/${currentPage}`)}>목록</button>
               
                {
                    loginok!=null && myid===dto.myid?
                    <button type='button' className='btn btn-outline-danger'
                    style={{width:'80px',marginRight:'5px'}}
                    onClick={()=>{
                        const url=`/rboard/delete?num=${dto.num}`;
                        Axios.delete(url)
                        .then(res=>{
                            //목록으로 이동
                            navi(`/rboard/list/${currentPage}`);
                        })
                    }}>삭제</button>:''
                }

                {
                    loginok!=null && myid===dto.myid?
                    <button type='button' className='btn btn-outline-danger'
                    style={{width:'80px',marginRight:'5px'}}
                    onClick={()=>{

                    }}>수정</button>:''
                }
            </div>
        </div>
    );
}

export default BoardDetailPage;