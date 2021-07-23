//JS part
import React,{useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

//design part
import Header from '../common/header';
import Footer from '../common/footer';
import '../../css/MemberAdd.css';



const LoginForm = () => {
        //set
        const [usernameReg,setUsernameReg] = useState("");
        const [passwordReg,setPasswordReg] = useState("");
        const [username,setUsername] = useState("");
        const [password,setPassword] = useState("");

    
        //fn
        const login=()=>{
            axios.post("http://http://localhost:3000/login",
            {
                mbrId:username,
                mbrPw:password,
            }).then((response)=>{
                console.log(response);
            })
        }//end login
    

    return (
    <>  
        <form  method="post" class="loginForm">
        <Link to="/"><img className="logo" src={require('../../Image/logo.png').default} /></Link> 
            <a href="${request.getContextPath()}/app"> </a>
            <p>" 자신을 알아야 평화를 찾을 수 있는 법 "</p>
            <div class="idForm">
                <input type="text" name="mbrId" id="mbrId" placeholder="ID" onChange={(e)=> {
                            setUsername(e.target.value);    
                            }}/>
            </div>
            <div class="pwForm">
                <input type="text" name="mbrPw" id="mbrPw" placeholder="PassWord" onChange={(e)=> {
                            setPassword(e.target.value);    
                            }}/>
            </div>
            <div class="button">
                <button name="login" id="login" onClick={login}>L O G I N</button>
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