import React from 'react';
import '../../css/header.css';

import News from '../news/NewsPage';

import {Link} from 'react-router-dom';

const Header= () => {
  return (
      <> 
        <header>
        <nav>
              <Link to="/"><img className="logo" src={require('../../Image/logo.png').default} /></Link> 
              <div className="empty"></div>
              <ul className="nav">
                <li><Link to="/board"> 게 시 판 </Link></li>
                <li><Link to="/news"> 뉴스 및 소식 </Link></li>
                <li><Link to="/login"> 로 그 인 </Link></li>
                <li><Link to="/register"> 회원가입 </Link></li>
              </ul>
          </nav>
        </header>
      </>
  ); //end return
};

export default Header;