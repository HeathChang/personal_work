//main 자바스크립트 관리 (body 태그) →client 부분
import React, {Component} from 'react';
import './App.css';
import Member from './components/Member';



class App extends Component {
  //0629.21:51:서버에 접속하여 데이터 가져오기 시작//
  //component내에서 변경될 수 있는 값을 처리
  state={ 
    member: ""
  }

  //api접속하여 데이터 가져오기
  componentDidMount() {
    this.callApi()
      .then(response => this.setState({member:response})) //body에서 받은 값 state내 res에 저장
      .catch(error => console.log(error))
    }

  callApi =async()=>{
    const response = await fetch('api/member'); //api/member의 데이터
    const body = await response.json();
    return body;
  }
//0629.21:51:서버에 접속하여 데이터 가져오기 완료//
  render() {
    return(
      <div>
        {this.state.member 
        ? this.state.member.map(index=>{ //map을 사용해서 뽑기
          return (
            <Member
            key={index.name} 
            name={index.name}
            birthday={index.birthday}
            gender={index.gender}
            job={index.job}
            /> 
          )
          })
        :""
        //첫 시작 공백시, 디버깅
        }
      </div>
    )
    }
}

export default App;
