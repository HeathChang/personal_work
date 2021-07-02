import React from "react";

class Member extends React.Component { 
  render(){
    return(
    <div>
        <h2>{this.props.mbrId}</h2>
        <h2>{this.props.mbrPw}</h2>
        <h2>{this.props.mbrName}</h2>
        <h2>{this.props.mbrEmail}</h2>
        <h2>{this.props.mbrGenre}</h2>
        <h2>{this.props.mbrRegdate}</h2>
        <h2>======================</h2>
    </div>
    )
  }
}

export default Member;