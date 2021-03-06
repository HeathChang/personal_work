import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:01' },
        { title: 'Macarena', duration: '4:02' },
        { title: 'All Start', duration: '4:03' },
        { title: 'I want it That way', duration: '4:04' }

    ]
};


const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        console.log("check action on reducers: ", action); //액션 정보
        //console.log("This works: ", selectedSong); //이전에 선택한 노래 
        return action.payload
    }
    return selectedSong;

};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})