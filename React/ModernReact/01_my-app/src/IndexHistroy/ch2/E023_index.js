//1. import the react and reactDom libraries
import React from "react";
import ReactDOM from "react-dom";

//2. create a react component

const App = () => {
  const buttonText = {text: 'This is a text'}
  const labelText = 'Enter Name'

  return(
  <div>
    <label className="label" htmlFor="name">{labelText}</label>
    <input id="name" type="text" />
    <button style={{ backgroundColor: "blue", color: "white" }}>{buttonText.text}</button>
    {/* can use JS objects as long as not trying to print them as text -> 객체를 텍스트로만 사용하지 않음 사용가능  */}

  </div>
  )
};

//3. Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  //reference to the root
  document.querySelector("#root")
);
