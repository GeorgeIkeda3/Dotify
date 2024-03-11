import React, { useState, useRef, useEffect } from 'react';
import ProgressCircle from "./progressCircle";
import WaveAnimation from "./waveAnimation";
import Controls from "./controls";
import "./audioPlayer.css";

export default function AudioPlayer({ currentTrack, currentIndex, setCurrentIndex, total }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [trackProgress, setTrackProgress] = useState(0);
    var audioSource = total[currentIndex]?.track.preview_url;
    const audioRef = useRef(new Audio(total[0]?.track.preview_url));
    const intervalRef = useRef();
    const isReady = useRef(false);
    const { duration } = audioRef.current;
    const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;
    var playing = audioRef.current.currentTime > 0 && !audioRef.current.paused && !audioRef.current.ended && audioRef.current.readyState > 0;
    const startTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            if(audioRef.current.ended) {
                handleNext();
            } else {
                setTrackProgress(audioRef.current.currentTime);
            }
        }, [1000]);
    };
    
    const artists = [];
    currentTrack?.album?.artists.forEach((artist) => {
        artists.push(artist.name);
    });

    useEffect(() => {
        if (audioRef.current.src) {
            if(isPlaying) {
                if(!playing) {
                    audioRef.current.play();
                    startTimer();
                }
            } else {
                clearInterval(intervalRef.current);
                audioRef.current.pause();
            }
        } else {
            if(isPlaying) {
                audioRef.current = new Audio(audioSource);
                if (!playing) {
                    audioRef.current.play();
                    startTimer();
                }
            } else {
                clearInterval(intervalRef.current);
                audioRef.current.pause();
            }
        }
    }, [isPlaying])

    useEffect(() => {
        audioRef.current.pause();
        audioRef.current = new Audio(audioSource);
        setTrackProgress(audioRef.currentTime);
        if(isReady.current) {
            if (!playing) {
                audioRef.current.play();
                setIsPlaying(true);
                startTimer();
            }
        } else {
            isReady.current = true;
        }
    }, [currentIndex]);

    useEffect(() => {
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        }
    }, []);

    const handleNext = () => {
        if(currentIndex === total.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if(currentIndex - 1 < 0) {
            setCurrentIndex(total.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const addZero = (n) => {
        return n > 9 ? "" + n : "0" + n;
    }


    return (
        <div className="body-player flex">
            <div className="left-player">
                <ProgressCircle
                    percentage={currentPercentage}
                    isPlaying={true}
                    image={currentTrack?.album?.images[0]?.url}
                    size={250}
                    color="darkblue"
                    />
            </div>
            <div className="right-player flex">
                <p className="song-title">{currentTrack?.name}</p>
                <p className="song-artist">{artists.join(' | ')}</p>
                <div className="player-right-bottom flex">
                    <div className="song-duration flex">
                        <p className="duration">0:{addZero(Math.round(trackProgress))}</p>
                        <WaveAnimation isPlaying={isPlaying}/>
                        <p className="duration">0:30</p>
                    </div>
                    <Controls 
                        isPlaying={isPlaying}
                        setIsPlaying={setIsPlaying}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                        total={total} 
                    />
                </div>
            </div>
        </div>
    );
}
