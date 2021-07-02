import React from "react";

class DetailGame extends React.Component { 
  render(){
    return(
    <div>
        <h2>{this.props.gameNo}</h2>
        <h2>{this.props.gameName}</h2>
        <h2>{this.props.gameImage}</h2>
        <h2>{this.props.gamePrice}</h2>
        <h2>{this.props.gameContent}</h2>
        <h2>{this.props.gameCategory}</h2>
        <h2>{this.props.gameGenre}</h2>
        <h2>{this.props.gameReleasedDate}</h2>
        <h2>{this.props.discountRate}</h2>
    </div>
    )
  }
}

export default DetailGame;