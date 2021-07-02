import React from 'react';
import '../../css/DetailPage.css';
import { useParams } from 'react-router-dom';


const DetailPage= () => {
    //const {gameNo}=useParams();
    //console.log("gameNo: "+{gameNo});
    // const [game, setGameNo] = useState(gameNo);
    //setGameNo(gameNo);

    const gameDetailPage = () => {
        <>
            <h1> Hello World</h1>
            {/* <div>{game.gameNo}</div>
            <div>{game.gameName}</div>
            <div>{game.gameImage}</div>
            <div>{game.gamePrice}</div>
            <div>{game.gameContent}</div>
            <div>{game.gameCategory}</div>
            <div>{game.gameGenre}</div>
            <div>{game.gameReleasedDate}</div>
            <div>{game.discountRate}</div> */}
        </>
    }

    return (
    <>
        <div>
            <h1> This is Header of DetailPage </h1>
            {gameDetailPage}
        </div>
    </>
    );
};

export default DetailPage;