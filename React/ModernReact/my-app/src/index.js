//1. import the react and reactDom libraries
import React from 'react'
import ReactDOM  from 'react-dom'

//2. create a react component
const App = function() {
    return <div> Hi There  </div>
}

//3. Take the react component and show it on the screen
ReactDOM.render(
    <App/>,
    //reference to the root
    document.querySelector('#root')
)