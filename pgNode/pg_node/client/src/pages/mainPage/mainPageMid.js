import React from 'react';


const MainPageMid= () => {
    return (
        <> 
            <form>
            <div class="wrapper">
                <section class="main-contents">
                    <div class="container">
                        <div>
                            <table class="midTable" id="midTable"></table>
                        </div>
                        <div>
                            <input type="text" id="tagSearch" placeholder="태그검색"/>,
                            <div class="tagScroll" id="tagScroll"></div>
                        </div>
                    </div>
                </section>
            </div>
        </form>
        </>
    );
};

export default MainPageMid;