//component
import React from "react";
//faker: to use fake data
import faker from "faker";

const CommentDetail = (props) => {
  return (    
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar}/>
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">Today at {props.timeAgo}</span>
        </div>
        <div className="text">{props.comment}</div>
      </div>
    </div>
  );
};

export default CommentDetail;