//1. import the react and reactDom libraries
import React from "react";
import ReactDOM from "react-dom";

//2. create a react component
const App = () => {
  return(
  <div>
    <label class="label" for="name">Enter name:</label>
    <input id="name" type="text" />
    <button style={{ backgroundColor: "blue", color: "white" }}>Submit</button>
  </div>
  )
};

//3. Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  //reference to the root
  document.querySelector("#root")
);
