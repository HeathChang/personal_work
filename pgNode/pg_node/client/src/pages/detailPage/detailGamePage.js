import React from 'react';
import '../../css/DetailPage.css';
import Header from '../common/header';
import DetailGamePageContext from './detailGamePageContext';
import Footer from '../common/footer';


const DetailPage= () => {
    return (
    <>
        <div>
            <script src="../../JS/main.js"/>
            <Header/>
            <DetailGamePageContext/>
            <Footer/>
        </div>
    </>
    );
};

export default DetailPage;

