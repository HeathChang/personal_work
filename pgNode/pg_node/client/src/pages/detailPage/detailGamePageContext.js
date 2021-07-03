import React, { useEffect, useState } from 'react';
import '../../css/Main.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const DetailGamePageContext= () => {
   // const [game, setGameNo] = useState([]);
    const {game} = useParams();
    //console.log(gameNo);

  // useEffect(() => {
  //     axios.get('http://10.0.2.2:3000/detailPage/' + gameNo)
  //         .then(response => {
  //           console.log(response);
            
  //         });
  // }, []);

    return (
        <>
            <h1> 게임 정보</h1>
            {game.gameNo}
            <div>{game.gameName}</div>
            <div>{game.gameImage}</div>
            <div>{game.gamePrice}</div>
            <div>{game.gameContent}</div>
            <div>{game.gameCategory}</div>
            <div>{game.gameGenre}</div>
            <div>{game.gameReleasedDate}</div>
            <div>{game.discountRate}</div>
        </>
    );
};

export default DetailGamePageContext;