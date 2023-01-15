import React from 'react'
import  ReactDOM  from 'react-dom'
import faker from "faker";
import CommentDetail from './CommentDetails';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className ="ui container comments"> 
            <ApprovalCard>
                <h4> Warning </h4>
                Are you sure you want this ? 
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail avatar = {faker.image.avatar()} author = "Sam" timeAgo= "4:50 PM" comment="Nice Post"/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail avatar = {faker.image.avatar()} author = "Paul" timeAgo= "4:52 PM" comment="Best post ever seen"/>
            </ApprovalCard>

            <ApprovalCard>  
                <CommentDetail avatar = {faker.image.avatar()} author = "Alex" timeAgo= "4:54 PM" comment="Nice XD"/>
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'))

//Notes:
// JSX -> {}  : when using JS variables 
//But, Components are exception to the rule