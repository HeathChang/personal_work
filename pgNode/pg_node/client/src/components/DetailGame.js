import React from "react";
import { Link } from 'react-router-dom';

const DetailGame=(game)=>{
    return(
    <div>
        <h2>{game.gameNo}</h2>
        <h2>{game.gameName}</h2>
        <h2>{game.gameImage}</h2>
        <h2>{game.gamePrice}</h2>
        <h2>{game.gameContent}</h2>
        <h2>{game.gameCategory}</h2>
        <h2>{game.gameGenre}</h2>
        <h2>{game.gameReleasedDate}</h2>
        <h2>{game.discountRate}</h2>
    </div>
    )
  }

export default DetailGame;