import React from 'react';
import { IconContext } from "react-icons";
import { IoPlay, IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";
import { FaPause } from "react-icons/fa";
import "./controls.css";

export default function Controls( { isPlaying, setIsPlaying, handleNext, handlePrev }) {

    return <IconContext.Provider value={{size: "30px", color: "lightblue"}}>
        <div className="wrapper flex">
            <div className="action-btn" onClick={handlePrev}>
                <IoPlaySkipBack />
            </div>
            <div className="play-pause-btn flex"
                onClick={() => setIsPlaying(!isPlaying)}
                >
                { isPlaying ? <FaPause /> : <IoPlay />}
            </div>
            <div className="action-btn" onClick={handleNext}>
                <IoPlaySkipForward />
            </div>
        </div>
    </IconContext.Provider>
}