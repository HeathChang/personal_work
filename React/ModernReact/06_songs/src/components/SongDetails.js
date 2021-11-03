import React from 'react';
import { connect } from 'react-redux';


const SongDetail = ({ selectedSong }) => {
    if (!selectedSong) {
        return <div>Select a Song</div>
    }
    return (
        <div>
            <h3> Details for: </h3>
            <strong>Title</strong>: {selectedSong.title}
            <br />
            <strong>Duration</strong>: {selectedSong.duration}
        </div>

    )
}

const mapStateToProps = (state) => {
    return { selectedSong: state.selectedSong }
}

export default connect(mapStateToProps, {})(SongDetail);