import React, { Component } from 'react';
import '../../css/Main.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const DetailGamePageContext = () => {
    state = { username: null };
    const [game, setGameNo] = useState([]);


    componentDidMount() {
        fetch('/')
            .then(res => res.json())
            .then(user => this.setState({ username: user.username }));
    }



    return (
        const { username } = this.state;
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