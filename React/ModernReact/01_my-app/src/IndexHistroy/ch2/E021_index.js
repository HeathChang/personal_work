//1. import the react and reactDom libraries
import React from "react";
import ReactDOM from "react-dom";

//2. create a react component
function getButtonText(){
    return 'Click from App'
}
const App = () => {
  const buttonText = 'Click Me !'  

  return(
  <div>
    <label className="label" for="name">Enter name:</label>
    <input id="name" type="text" />
    <button style={{ backgroundColor: "blue", color: "white" }}>{getButtonText()}</button>
    <button style={{ backgroundColor: "blue", color: "white" }}>{buttonText}</button>

  </div>
  )
};

//3. Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  //reference to the root
  document.querySelector("#root")
);
