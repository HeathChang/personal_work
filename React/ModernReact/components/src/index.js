import React from 'react'
import  ReactDOM  from 'react-dom'

import CommentDetail from './CommentDetails';

const App = () => {
    return (
        <div className ="ui container comments"> 
            <CommentDetail author = "Sam"/>
            <CommentDetail author = "Paul"/>
            <CommentDetail author = "Alex"/>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'))

//Notes:
// JSX -> {}  : when using JS variables 
//But, Components are exception to the rule