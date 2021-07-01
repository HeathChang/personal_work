import React from 'react';


const Header= () => {
  return (
      <> 
      <h1>
          <img className="logo" src={require('../../Image/logo.png').default} />
			</h1>

      <nav>
          <div class="empty"></div>
          <ul class="nav">
            <li><a href="${request.getContextPath()}/app/board/list">게시판</a></li>
            <li><a href="${request.getContextPath()}/app/news/list">뉴스 및 소식</a></li>
            <li><a href="${request.getContextPath()}/app/LoginForm">로그인</a></li>
            <li><a href="${request.getContextPath()}/app/MemberForm">회원가입</a></li>
          </ul>
			</nav>
      </>
  ); //end return
};

export default Header;