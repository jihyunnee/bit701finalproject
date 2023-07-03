import React from 'react';
import {Home,Menu} from './components';
import { Route, Routes } from 'react-router-dom';
import {LoginForm, MemberForm, MemberList} from './member';
import {BoardList, BoardForm} from './board';
import ReducerCom1 from './day0627/ReducerCom1';
import ReducerCom2 from './day0627/ReducerCom2';
import CallBackTest from './callback/CallBackTest';

function RouteMain(props) {
    return (
        <div>
            <Menu/>
            <br style={{clear:'both'}}/><br/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<LoginForm/>}/>
                
                <Route path='/member'>
                    <Route path='form' element={<MemberForm/>}/>
                    <Route path='list' element={<MemberList/>}/>
                </Route>

                <Route path='/board'>
                    <Route path='form' element={<BoardForm/>}/>
                    <Route path='list' element={<BoardList/>}/>
                    <Route path='list/:currentPage' element={<BoardList/>}/>
                </Route>

                <Route path='/reducer1' element={<ReducerCom1/>}/>
                <Route path='/reducer2' element={<ReducerCom2/>}/>

                <Route path='/callback' element={<CallBackTest/>}/>
                
                <Route path='*' element={
                    <div>
                        <h1>잘못된 URL 주소입니다</h1>
                        <br/><br/>
                        
                    </div>
                }/>

            </Routes>
        </div>
    );
}

export default RouteMain;