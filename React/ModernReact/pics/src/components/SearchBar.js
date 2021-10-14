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
        console.log(this.state.term);
        //here this.state doesn't match state.term 
        //here this -> focus on the method where we call the method
    }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={(e)=>{this.onFormSubmit(e)}}>
          <div className="field">
            <label> Image Search </label> 
            <input type="text" value={this.state.term} onChange={(e)=> {this.setState({term: e.target.value})}}/>                
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
