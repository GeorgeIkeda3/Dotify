import React from 'react';
import "./queue.css";

export default function Queue({ tracks, setCurrentIndex }) {
    console.log(tracks);
    const minutes = 0;
    const seconds = 0;

    return <div className="queue-container flex">
        <div className="queue flex">
            <p className="next">Next Song</p>
            <div className="queue-list">
                {tracks?.map((track, index) => (
                                            <div className="flex" onClick={() => setCurrentIndex(index)}>
                                                <p className="track-name">{track?.track?.name}</p>
                                                <p>{minutes}:{seconds}</p>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
}