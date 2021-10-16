import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

import SearchBar from "./SearchBar";

class App extends React.Component {  
  onSearchSubmit(term) {
    console.log("term value in app.js>> ", term);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
