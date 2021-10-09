import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  //기본값
  constructor(props) {
    // super reference to the parents
    super(props);
    //this is the only time to do direct assignment
    this.state = { lat: null }; //because we dnt know what latitude value is
    this.state = { long: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //setState is  to update state.
        this.setState({ lat: position.coords.latitude });
        this.setState({ long: position.coords.longitude });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //React says we have to define render.
  render() {
    return (
      <div>
        <div> Latitude: {this.state.lat} </div>
        <div>Longitude: {this.state.long}</div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
