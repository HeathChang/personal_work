import { combineReducers } from "redux"

const songsReducer = () => {
    return [
        { title: 'Hello World', duration: '4:59' },
        { title: 'Barbie Girls', duration: '4:10' },
        { title: 'Rorem Ipsum', duration: '2:59' },
        { title: 'Rhapsody', duration: '4:42' },
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    switch (action.type) {
        case 'SONG_SELECTED':
            return action.payload
        default:
            return selectedSong
    }
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})