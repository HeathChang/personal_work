import React, { useEffect, useState } from 'react';
import '../../css/Main.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DetailGame from '../../components/DetailGame';


const DetailGamePageContext = () => {
    const [game, setGame] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/detailpage')
            .then(response => {
                setGame(response.data);
            });
    }, []);
    
    return (
        
        <>
            <h1> 게임 정보</h1>
            <DetailGame game={game}/>
        </>
    );
};

export default DetailGamePageContext;