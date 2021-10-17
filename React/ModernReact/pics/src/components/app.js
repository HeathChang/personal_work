//install
import React from "react";
//components
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    console.log("result: ", response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
