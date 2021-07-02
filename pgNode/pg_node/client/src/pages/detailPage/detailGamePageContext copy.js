import React, {Component} from 'react';
import GameDetail from '../../components/DetailGame';
import '../../css/Main.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';


class DetailGamePageContext extends Component  {

  // const [game, setGameNo] = useState([]);
  // const {gameNo} = useParams();
  // console.log(gameNo);

  // useEffect(() => {
  //     axios.get('http://10.0.2.2:3000/detailPage/' + gameNo)
  //         .then(response => {
  //           console.log(response);
            
  //         });
  // }, []);
    state={ 
      game: ""
    }
    componentDidMount=()=> {
      this.callApi()
        .then(response => this.setState({game:response})) //body에서 받은 값 state내 res에 저장
        .catch(error => console.log(error))
    }
    callApi =async()=>{
      const response = await fetch('/detailpage'); //api/member의 데이터
      console.log("response 데이터: "+ response.status);
      console.log("response 데이터: "+ response);
      const body = await response.json();
      return body;
    }
  
    render() {
      return(
        <div>
          {this.state.game 
          ? this.state.game.map(game=>{ //map을 사용해서 뽑기
            return (
              <GameDetail
              key={game.gameNo}
              gameNo={game.gameNo}
              gameName={game.gameName}
              gameImage={game.gameImage}
              gamePrice={game.gamePrice}
              gameContent={game.gameContent}
              gameCategory={game.gameCategory}
              gameGenre={game.gameGenre}
              gameReleasedDate={game.gameReleasedDate}
              discountRate={game.discountRate}
              /> 
            )
            })
          :""
          //첫 시작 공백시, 디버깅
          }
        </div>
      )
      } //end render
  } //end app

export default DetailGamePageContext;