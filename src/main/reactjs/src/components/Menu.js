import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

function Menu(props) {
    return (
        <ul className='menu'>
        <li>
            <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
            <NavLink to={"/reducer1"}>reducer1</NavLink>
        </li>
        <li>
            <NavLink to={"/reducer2"}>reducer2</NavLink>
        </li>
        <li>
            <NavLink to={"/member/form"}>회원가입</NavLink>
        </li>
        <li>
            <NavLink to={"/member/list"}>회원목록</NavLink>
        </li>
        <li>
            <NavLink to={"/board/list"}>게시판</NavLink>
        </li>
        {
               sessionStorage.loginok==null || sessionStorage.loginok==='no'?
                <li>
                    <NavLink to={"/login"}>로그인</NavLink>
                </li>:
                <div>      
                      <li style={{width:'250px',backgroundColor:'darkcyan',color:'white',cursor:'pointer'}}
                    onClick={()=>{        
                        sessionStorage.removeItem("token");
                        sessionStorage.removeItem("myid");
                        sessionStorage.removeItem("myname");  
                        window.location.reload();//새로고침                  
                     }}>로그아웃               
                    &nbsp;&nbsp;&nbsp;
                    <b style={{color:'yellow'}}>{sessionStorage.myname}({sessionStorage.myid})님</b>
                    </li>
                </div>
            }
    </ul>
    );
}

export default Menu;