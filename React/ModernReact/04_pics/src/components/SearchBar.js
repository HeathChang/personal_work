//npm
import React from "react";

class SearchBar extends React.Component {
    state = {term : ''};

    // onFormSubmit(event){
    //     event.preventDefault();
    //     //console.log(this.state.term); //undefined
    //     //here this.state doesn't match state.term 
    //     //here this -> focus on the method where we call the method
    // }

    onFormSubmit=(event)=>{
        event.preventDefault();
        console.log("this.state.term in searchbar>> ", this.state.term);
        console.log("this.props: ",this.prop);
        //pass a callback && child call callback
        this.props.onSubmit(this.state.term);
        //class component -> this.props
        //method component -> props
    }

    render() {
      return (
        <div className="ui segment">
          <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
              <label>Image Search</label>
              <input
                type="text"
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}
              />
            </div>
          </form>
        </div>
      );
    }
  }
  
  export default SearchBar;