import React, { Component } from "react";

const Accordion = ({ itemsFromApp }) => {
  const onTitleClick = (index) => {
    console.log("Title Clicked", index);
  };

  const renderedItems = itemsFromApp.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div className="title active" onClick={() => onTitleClick(index)}>
          {/* 여기서 arrow function을 사용하지 않으면(onClick={onTitleClick(index)}) 일 경우,  */}
          {/* 함수가 render되는 순간, invoked 되어서, event와 관계없이 된다  */}
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  }); //end renderedItems function

  return <div className="ui styled accordion">{renderedItems}</div>;
}; //end Accordion

export default Accordion;
