import React from 'react';
import Header from '../common/header';
import MainPageTop from '../mainPage/mainPageTop';
import MainPageMid from '../mainPage/mainPageMid';
import MainPageBottom from '../mainPage/mainPageBot';
import Footer from '../common/footer';


const Home = () => {
    return (
    <>
        <script src="../../JS/main.js"/>
        <div>
            <Header/>
            <MainPageTop/>,
            <MainPageMid/>,
            <MainPageBottom/>,
            <Footer/>
        </div>
    </>
    );
};

export default Home;