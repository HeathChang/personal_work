import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  //기본값
  constructor(props) {
    // super reference to the parents
    super(props);
    //this is the only time to do direct assignment
    this.state = { lat: null }; //because we dnt know what latitude value is

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //setState is  to update state.
        this.setState({ lat: position.coords.latitude });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //React says we have to define render.
  render() {
    return <div> Latitude: {this.state.lat}</div>;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
