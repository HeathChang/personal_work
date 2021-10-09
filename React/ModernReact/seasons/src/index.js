import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  //기본값
  constructor(props) {
    // super reference to the parents
    super(props);
    //this is the only time to do direct assignment
    this.state = {
      lat: null,
      long: null,
      errorMessage: "",
    }; //because we dnt know what latitude value is

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //setState is  to update state.
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  //React says we have to define render.
  render() {
    return (
      <div>
        <div >
          Latitude: {this.state.lat}
          <div/>
          Longitude: {this.state.long}
        </div>
        <div>Error: {this.state.errorMessage}</div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
