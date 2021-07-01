import React from 'react';
import '../../css/Main.css';


const MainPageTop= () => {
    return (
        <>
        <div class="wrapper"> 
            <div class="searchBox">
                <input type="text" id="searchText" placeholder="게임검색"/>
                <button id="search">
                    검색
                </button>
            </div>

            <section class="main-contents">
                <button id="newGame" class="gamesBtn">최신게임</button>
                <button id="recommendedGame" class="gamesBtn">추천게임</button>
                <button id="saleGame" class="gamesBtn">할인게임</button>
                <div class="container">
                    <div>
                        <table class="topTable">
                            <tr id="topTableNum"></tr>
                            <tr id="topTableImg"></tr>
                            <tr id="topTableName"></tr>
                            <tr id="topTableYear"></tr>
                            <tr id="topTableCategory"></tr>
                        </table>
                    </div>
                <div>
                    <ol class="topChart" id="topChart" start="4"></ol>
                </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default MainPageTop;