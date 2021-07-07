import React,{useState} from 'react';
import '../../css/Login.css';
import {Link} from 'react-router-dom';


const LoginForm = () => {

    const [usernameReg,setUsernameReg] = useState("");
    const [passwordReg,setPasswordReg] = useState("");








    return (
    <>  
        <script src="../../JS/main.js"/>
        <form action="login" method="post" class="loginForm">
        <Link to="/"><img className="logo" src={require('../../Image/logo.png').default} /></Link> 
            <a href="${request.getContextPath()}/app"> </a>
            <p>" 자신을 알아야 평화를 찾을 수 있는 법 "</p>
            <div class="idForm">
                <input type="text" name="mbrId" id="mbrId" placeholder="ID" onChange={(e)=> {
                    setUsernameReg(e.target.value);    
                }}/>
            </div>
            <div class="pwForm">
                <input type="text" name="mbrPw" id="mbrPw" placeholder="PassWord" onChange={(e)=> {
                    setPasswordReg(e.target.value);    
                }}/>
            </div>
            <div class="button">
                <button type="submit" name="login" id="login">L O G I N</button>
            </div>
            <div class="check">
                <a href="${request.getContextPath()}/app/FindIdPw" id="find">아이디/비밀번호 찾기</a> 
                <br/>
                <a href="${request.getContextPath()}/app/MemberForm" id="create">회원가입</a>
            </div>
	    </form>
    </>
    );
};

export default LoginForm;