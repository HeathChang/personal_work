import React from 'react';
import '../../css/Main.css';


const MainPageMid= () => {
    return (
        <> 
            <div class="wrapper">
                <section class="main-contents">
                    <div class="container">
                        <div>
                            <table class="midTable" id="midTable"></table>
                        </div>,
                        <div>
                            <input type="text" id="tagSearch" placeholder="태그검색"/>,
                            <div class="tagScroll" id="tagScroll"></div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default MainPageMid;