//npm
import React from "react";

class SearchBar extends React.Component {
//   onInuputChange(event) {
//       let text= event.target.value
//       console.log(text);
//   }

    state = {term : ''};


  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label> Image Search </label>
            <input type="text" value={this.state.term} onChange={(e)=> {this.setState({term: e.target.value.toUpperCase()})}}/>
            {/* 
            <input type="text" onChange={this.onInuputChange} /> 
            <input type="text" onChange={(event)=>{console.log(event.target.value)}} />  
             */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
