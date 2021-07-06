import React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import '../../css/MemberAdd.css';
import {Link} from 'react-router-dom';

const RegisterPage = () => {
    return (
    <>
        <body>
        <div>
                <form action="memberAdd" method="post" className="addForm" id="addForm">
                <Link to="/"><img className="logo" src={require('../../Image/logo.png').default} /></Link> 
                    <h2>회원가입</h2>

                    <div className="contentform">
                        <div className="row" styles="display: inline;">
                            <span className="title">아이디 *
                            <button id="idchk" className="idchk" onclick="idCheck(); return false;">중복체크</button>
                            </span> 
                            <input type="text" className="content" name="mbrId" autoFocus/>
                            <span id="result"/>
                        </div>

                        <div className="row">
                            <span className="title">비밀번호 *</span> 
                            <input type="text" className="content" name="mbrPw" autocomplete="off" placeholder=" 비밀번호는 6자리 이상이어야 합니다."/>
                        </div>

                        <div className="row" styles="display: inline;">
                            <span className="title">
                            비밀번호 확인 * 
                            <span id="pwcheck"/>
                            </span> 
                            <input type="text" className="content" name="mbrPw2" id="mbrPw2"/>
                        </div>

                        <div className="row">
                            <span className="title">닉네임 *
                            <button id="nickchk" className="nickchk" onclick="nickCheck(); return false;">중복체크</button>
                            </span> 
                            <input type="text" className="content" name="mbrName" id="mbrName"/>
                        </div>

                        <div className="row">
                            <span className="title">이메일 *
                            <button id="emailchk" className="emailchk" onclick="emailCheck(); return false;">중복체크</button>
                            </span> 
                            <input type="email" className="content" name="mbrEmail" id="mbrEmail"/>
                        </div>

                        <div className="row">
                            <span className="title">태그 *
                            <button id="mbrGenre" className="mbrGenre" onclick="tag(); return false;">Tag</button>
                            </span> 
                            <input type="text" className="content" id="mbrName"/>

                        </div>


                        <div className="button">
                            <input type="submit" value="제 출"/>
                        </div>

                    </div>
                </form>
        </div>
    </body>
    </>
    );
};

export default RegisterPage;