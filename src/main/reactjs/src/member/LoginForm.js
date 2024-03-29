import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function LoginForm(props) {
    const [myid,setMyid]=useState('');
    const [mypass,setMypass]=useState('');
    const navi=useNavigate();
    
    // //submit 이벤트
    // const onSubmitLogin=(e)=>{
    //     e.preventDefault();
    //     const url=`/member/login?myid=${myid}&mypass=${mypass}`;
    //     axios.get(url)
    //     .then(res=>{
    //         if(res.data.success==='yes'){
    //             sessionStorage.loginok="yes";
    //             sessionStorage.myname=res.data.myname;
    //             sessionStorage.myid=myid;
    //             navi("/")
    //             window.location.reload();
    //         }else{
    //             alert("아이디나 비밀번호가 맞지 않습니다");
    //             sessionStorage.loginok="no";
    //             sessionStorage.myname="";
    //             sessionStorage.myid="";
           
    //         }
    //     })
    // }

    const onSubmitLogin=(e)=>{
        e.preventDefault();
        const url= `/member/login?myid=$={myid}&mypass=${mypass}`;
        axios.get(url)
        .then(res=>{
            if(res.data.success==='yes'){
            
                sessionStorage.token=res.data.token;
                console.log("res.data.token="+res.data.token);
                //sessionStorage.loginok="yes";
                sessionStorage.myname=res.data.myname;
                sessionStorage.myid=myid;
                navi("/");
                window.location.reload();//새로고침 
            }else{
                alert("아이디나 비밀번호가 맞지 않습니다");
                //sessionStorage.loginok="no";
                sessionStorage.myname="";
                sessionStorage.myid="";       
            }
        })
    }
    return (
        <div>
            <form onSubmit={onSubmitLogin}>
                <table>
                    <tr>
                        <th>
                            아이디
                        </th>
                        <td>
                            <input type='text' placeholder="아이디" required autoFocus
                            value={myid} onChange={(e)=>setMyid(e.target.value)}/>

                        </td>
                    </tr>
                    <tr>
                        <th>
                            비밀번호
                        </th>
                        <td>
                            <input type='password' placeholder="비밀번호" required
                            value={mypass} onChange={(e)=>setMypass(e.target.value)}/>

                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} className='table-danger' align='center'>
                            <button type='submit'>
                                회원로그인
                            </button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
}

export default LoginForm;