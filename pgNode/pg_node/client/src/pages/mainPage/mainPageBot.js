import React from 'react';
import '../../css/Main.css';

const MainPageBottom= () => {
    return (
        <> 
            <div class="wrapper">
                <section class="main-contents">
                    <div class="bestBoard">
                        <p>게임 베스트</p><p>질문 답변 베스트</p>
                    </div>
                    <div class="container">
                        <div>
                            <button class="boardBtn" id="recommendedPost">추천</button>
                            <button class="boardBtn" id="mostViewPost">조회</button>
                            <ol class="boardChart" id="boardPost"></ol>
                        </div>
                        <div>
                            <button class="boardBtn" id="recommendedQnA">추천</button>
                            <button class="boardBtn" id="mostViewQnA">조회</button>
                            <ol class="boardChart" id="boardQnA"></ol>
                        </div>
                    </div>
                    <div class="news">
                        <p>최신 뉴스</p>
                    </div>
                    <div class="container">
                        <div>
                            <ol class="newsChart" id="mainNews"></ol>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default MainPageBottom;