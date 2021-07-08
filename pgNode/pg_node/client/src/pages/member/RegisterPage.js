//JS part
import React,{useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

//design part
import Header from '../common/header';
import Footer from '../common/footer';
import '../../css/MemberAdd.css';


const RegisterPage = () => {
    //set
    const [usernameReg,setUsernameReg] = useState("");
    const [passwordReg,setPasswordReg] = useState("");
    const [password2Reg,setPassword2Reg] = useState("");
    const [nickNameReg,setNicknameReg] = useState("");
    const [emailReg,setEmailReg] = useState("");
    const [tagReg,setTagReg] = useState("");

    //fn
    const register=()=>{
        axios.post("http://http://localhost:3000/register",
        {
            mbrId:usernameReg,
            mbrPw:passwordReg,
            mbrName:nickNameReg,
            mbrEmail:emailReg,
            mbrGenre:tagReg
        }).then((response)=>{
            console.log(response);
            window.location = "/";
        })
    }//end register


    return (
    <>
        <div>
                <form method="post" className="addForm" id="addForm">
                <Link to="/"><img className="logo" src={require('../../Image/logo.png').default} /></Link> 
                    <h2>회원가입</h2>

                    <div className="contentform">
                        <div className="row" styles="display: inline;">
                            <span className="title">아이디 *
                            <button id="idchk" className="idchk" onclick="idCheck(); return false;">중복체크</button>
                            </span> 
                            <input type="text" className="content" name="mbrId" autoFocus onChange={(e)=> {
                            setUsernameReg(e.target.value);    
                            }}/>
                            <span id="result"/>
                        </div>

                        <div className="row">
                            <span className="title">비밀번호 *</span> 
                            <input type="text" className="content" name="mbrPw" autocomplete="off" placeholder=" 비밀번호는 6자리 이상이어야 합니다." onChange={(e)=> {
                            setPasswordReg(e.target.value);    
                            }}/>
                        </div>

                        <div className="row" styles="display: inline;">
                            <span className="title">
                            비밀번호 확인 * 
                            <span id="pwcheck"/>
                            </span> 
                            <input type="text" className="content" name="mbrPw2" id="mbrPw2" onChange={(e)=> {
                            setPassword2Reg(e.target.value);    
                            }}/>
                        </div>

                        <div className="row">
                            <span className="title">닉네임 *
                            <button id="nickchk" className="nickchk" onclick="nickCheck(); return false;">중복체크</button>
                            </span> 
                            <input type="text" className="content" name="mbrName" id="mbrName" onChange={(e)=> {
                            setNicknameReg(e.target.value);    
                            }}/>
                        </div>

                        <div className="row">
                            <span className="title">이메일 *
                            <button id="emailchk" className="emailchk" onclick="emailCheck(); return false;">중복체크</button>
                            </span> 
                            <input type="email" className="content" name="mbrEmail" id="mbrEmail" onChange={(e)=> {
                            setEmailReg(e.target.value);    
                            }}/>
                        </div>

                        <div className="row">
                            <span className="title">태그 *
                            <button id="mbrGenre" className="mbrGenre" onclick="tag(); return false;">Tag</button>
                            </span> 
                            <input type="text" className="content" id="mbrName" onChange={(e)=> {
                            setTagReg(e.target.value);    
                            }}/>

                        </div>


                        <div className="button">
                            <button onClick={register}> 등록</button>
                        </div>

                    </div>
                </form>
        </div>

    </>
    );
};

export default RegisterPage;