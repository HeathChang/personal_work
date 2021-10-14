//npm
import React from "react";

class SearchBar extends React.Component {
  onInuputChange(event) {
      let text= event.target.value
      console.log(text);
  }


  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label> Image Search </label>
            <input type="text" onChange={this.onInuputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
