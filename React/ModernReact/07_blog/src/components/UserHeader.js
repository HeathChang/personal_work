import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/index';

class UserHeader extends React.Component {
    //처음 화면에 마운트 될때 실행
    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }

    render() {
        //Arrow Function의 중괄호는 return 꼭 써줘야함. 

        const { user } = this.props

        if (!user) {
            return null
        }
        return <div className="header"> {user.name} </div>
    }
}

const mapStateToProps = (state, ownProps) => {
    //ownProps를 통해 자신의 props를 사용 가능 
    return {
        //다 넘겨줄 필요없음
        user: state.users.find((user) => (
            user.id === ownProps.userId
        ))
    }
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);


//1. 컴포넌트를 생성 후, 메인컴포넌트에 연결 
//2. 이후 Connect 와 fetchUser를  import 하여 actions 가져옴
//3. connect를 export에서 사용하고, 현재 mapStateToProps가 없기 때문에 null 부여 
//4. 이후 2번쨰 args로는 임포트한 fetchUser를 연결해준다. 
//5. 이후 reducers를 생성하고 reducers내 index.js에 import 후, combinedReducers에 넣어줌 
//6. 이후, 현재 파일로 연결하여 mapStateToProps 생성 후, connect와 연결