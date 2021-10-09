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
    if (this.state.errorMessage && !this.state.lat && !this.state.long) {
      return (
        <div>
          <div>Error: {this.state.errorMessage}</div>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            Latitude: {this.state.lat}
            <br />
            Longitude: {this.state.long}
          </div>
        </div>
      );
    }
    return <div> LOADING... </div>;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
