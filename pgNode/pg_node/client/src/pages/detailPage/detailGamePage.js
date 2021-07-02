import React from 'react';
import '../../css/DetailPage.css';
import DetailGamePageContext from './detailGamePageContext';

const DetailPage= () => {
    return (
    <>
        <div>
            <h1> This is Header of DetailPage </h1>
            <DetailGamePageContext/>
            <h1> This is Ending of DetailPage </h1>
        </div>
    </>
    );
};

export default DetailPage;

