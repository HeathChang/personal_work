import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/index';

class UserHeader extends React.Component {
    //처음 화면에 마운트 될때 실행
    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }

    render() {
        return <div> User Header</div>
    }
}

export default connect(null, { fetchUser })(UserHeader);


//1. 컴포넌트를 생성 후, 메인컴포넌트에 연결 
//2. 이후 Connect 와 fetchUser를  import 하여 actions 가져옴
//3. connect를 export에서 사용하고, 현재 mapStateToProps가 없기 때문에 null 부여 
//4. 이후 2번쨰 args로는 임포트한 fetchUser를 연결해준다. 