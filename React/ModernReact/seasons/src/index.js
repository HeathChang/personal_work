import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  //same as constructor -> this.state
  state ={lat: null, long: null, errorMessage: ""}

  //set up initial data
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        }),
      (error) => this.setState({ errorMessage: error.message })
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
    }  
    if (!this.state.errorMessage && this.state.lat && this.state.long) {
      return <SeasonDisplay lat={this.state.lat} long={this.state.long}/>;
    }

    return <div> LOADING... </div>;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
