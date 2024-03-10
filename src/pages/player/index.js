import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import apiClient from "../../spotify";
import SongCard from "../../components/songCard";
import Queue from "../../components/queue";
import "./player.css";

export default function Player() {
    const location = useLocation();
    const [tracks, setTracks] = useState([]);
    const [currentTrack, setCurrentTrack] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if(location.state) {
            apiClient.get("playlists/" + location.state?.id + "/tracks")
            .then(res=> {
                setTracks(res.data.items);
                setCurrentTrack(res.data.items[0].track);
            });
    }
}, [location.state]);

    return (
        <div className="screen-container flex">
            <div className="left">

            </div>
            <div className="right">
                <SongCard album={currentTrack.album} />
                <Queue />
            </div>
        </div>
    )
}