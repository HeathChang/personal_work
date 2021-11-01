import { combineReducers } from 'redux';
import { selectSong } from '../actions';

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Barbie girl', duration: '5:15' },
        { title: 'I want it That Way', duration: '2:30' },
        { title: 'All Starts', duration: '3:10' },
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
        console.log("payload check: ", action.payload);
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})