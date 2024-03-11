import React from 'react';
import ProgressCircle from "./progressCircle";
import "./audioPlayer.css";

export default function AudioPlayer({ currentTrack }) {
    return (
        <div className="body-player flex">
            <div className="left-player">
                <ProgressCircle
                    percentage={75}
                    isPlaying={true}
                    image={currentTrack?.images?.url}
                    size={250}
                    color="darkblue"
                    />
            </div>
            <div className="right-player"></div>
        </div>
    );
}
