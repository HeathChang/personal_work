import React from 'react'
import  ReactDOM  from 'react-dom'

import CommentDetail from './CommentDetails';

const App = () => {
    return (
        <div className ="ui container comments"> 
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'))

//Notes:
// JSX -> {}  : when using JS variables 
//But, Components are exception to the rule