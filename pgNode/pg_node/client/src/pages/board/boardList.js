import React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import '../../css/BoardList.css'

const Home = () => {
    return (
    <>
    <div>  <Header/> </div>
    <div class="wrapper contents">
        <h1>게시판</h1>

        <select id="boardCategory">
          <option value="all">전체 카테고리</option>
          <option value="common">일반글</option>
          <option value="info">게임정보</option>
          <option value="sales">할인정보</option>
          <option value="QnA">QnA</option>
        </select>

        <table id="boardList">
          <tr>
            <th>카테고리</th>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
            <th>조회수</th>
            <th>추천수</th>
          </tr>
        </table>

        <div class="searchBox">
          <select id="searchCategory">
            <option value="contents" selected>제목+내용</option>
            <option value="title">제목</option>
            <option value="writer">작성자</option>
          </select>
          
          <input type="text" id="searchText"/>
          <button id="search">
            <img src={require('../../Image/search.png').default} />
          </button>
        </div>


        <button id="write">글 작성</button>
        <div id="paging"></div>
      </div>

    <div>  <Footer/> </div>

    </>
    );
};

export default Home;