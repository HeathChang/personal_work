import React from 'react';
import Header from '../common/header';
import MainPageTop from '../mainPage/mainPageTop';
import MainPageBottom from '../mainPage/mainPageBot';
import MainPageMid from '../mainPage/mainPageMid';
import Footer from '../common/footer';


const Home = () => {
    return (
    <>
        <script src="../../JS/main.js"></script>
        <Header/>
        <div>
            <MainPageTop/>,
            <MainPageMid/>,
            <MainPageBottom/>,
            <Footer/>
        </div>
    </>
    );
};

export default Home;