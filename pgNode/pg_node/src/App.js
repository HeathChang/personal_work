//main 자바스크립트 관리 (body 태그)
import React, {Component} from 'react';
import './App.css';
import Member from './components/Member';

const member=[{
  'name':'홍길동1',
  'birthday':'941230209',
  'gender':'남자',
  'job':'대학생'
},{
  'name':'홍동2',
  'birthday':'9209',
  'gender':'여자',
  'job':'울랄라'
},{
  'name':'길동3',
  'birthday':'941230209',
  'gender':'자자',
  'job':'드래곤볼'
}]

class App extends Component {
  render() {
    return(
      <div>
        {member.map(index=>{
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
        }
      </div>
    )
    }
}

export default App;
