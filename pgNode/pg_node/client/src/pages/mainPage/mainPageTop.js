import React from 'react';
import '../../css/Main.css';


const MainPageTop= () => {
    return (
        <>
        
        <div class="wrapper"> 
            <div class="searchBox">
                <input type="text" id="searchText" placeholder="게임검색"/>
                <button id="search">
                <img className="search" src={require('../../Image/search.png').default} alt="검색"/>
                </button>
            </div>

            <section className="main-contents">
                <button id="newGame" className="gamesBtn">최신게임</button>
                <button id="recommendedGame" className="gamesBtn">추천게임</button>
                <button id="saleGame" className="gamesBtn">할인게임</button>
                <div className="container">
                    <div>
                        <table className="topTable">
                            <tr id="topTableNum"></tr>
                            <tr id="topTableImg"></tr>
                            <tr id="topTableName"></tr>
                            <tr id="topTableYear"></tr>
                            <tr id="topTableCategory"></tr>
                        </table>
                    </div>
                <div>
                    <ol className="topChart" id="topChart" start="4"></ol>
                </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default MainPageTop;