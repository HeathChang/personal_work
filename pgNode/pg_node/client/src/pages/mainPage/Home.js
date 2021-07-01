import React from 'react';
import MainPageTop from '../mainPage/mainPageTop';
import MainPageBottom from '../mainPage/mainPageBot';
import MainPageMid from '../mainPage/mainPageMid';
import '../../css/Main.css'


const Home = () => {
    return (
        <div>
            <h1>This is Header</h1>,
            <MainPageTop/>,
            <MainPageMid/>,
            <MainPageBottom/>

        </div>
    );
};

export default Home;