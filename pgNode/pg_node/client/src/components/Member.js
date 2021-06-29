import React from "react";

class Member extends React.Component { 
  render(){
    return(
    <div>
        <MemberProfile name={this.props.name} birthday={this.props.birthday}/>
        <MemberInfo gender={this.props.gender} job={this.props.job}/>
    </div>
    )
  }
}
class MemberProfile extends React.Component{
  render(){
    return(
    <div>
      <h2>{this.props.name}</h2>
      <p>{this.props.birthday}</p>
    </div>
    )
  }
}
class MemberInfo extends React.Component{
  render(){
    return(
    <div>
      <p>{this.props.gender}</p>
      <p>{this.props.job}</p>
    </div>
    )
  }
}


export default Member;