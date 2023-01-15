import React, { useEffect, useState } from 'react';
import '../../css/Main.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DetailGame from '../../components/DetailGame';


const DetailGamePageContext = () => {
    const [game, setGame] = useState(null);
    const  {gameNo}  = useParams();

    useEffect(() => {
        axios.get('http://localhost:3000/detailpage/' + gameNo)
            .then(response => {
                setGame(response.data);
            });
    }, []);

    const gameDetail = () => {
        <>  
            방갑습니다 : ) 
            <div>{game.gameNo}</div>
            <div>{game.gameName}</div>
            <div>{game.gameImage}</div>
            <div>{game.gamePrice}</div>
            <div>{game.gameContent}</div>
            <div>{game.gameCategory}</div>
            <div>{game.gameGenre}</div>
            <div>{game.gameReleasedDate}</div>
            <div>{game.discountRate}</div>
        </>
    }
    
    return (
        
        <>
            <h1> 게임 정보</h1>
            {gameDetail}
        </>
    )
};

export default DetailGamePageContext;