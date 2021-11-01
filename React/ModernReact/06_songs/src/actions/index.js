// Action Creater: state change 용도 
export const selectSong = (song) => {
    //return an action
    console.log("checking song in action", song);
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}
