import React, {useState, useEffect } from 'react';
import Library from '../library';
import Feed from '../feed';
import Favorites from '../favorites';
import Player from '../player';
import Sidebar from '../../components/sidebar';
import Login from '../login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setClientToken } from "../../spotify";
import SpotifyWebApi from 'spotify-web-api-js';
import "./home.css";

const spotify = new SpotifyWebApi();

export default function Home() {
    const [token, setToken] = useState("");

    useEffect(() => {
        const token = window.localStorage.getItem("token");
        const hash = window.location.hash;
        window.location.hash = "";
        if(!token && hash) {
            const _token = (hash.split('&')[0].split('=')[1]);
            window.localStorage.setItem("token", _token);
            spotify.setAccessToken(token);
            setToken(_token);
            setClientToken(_token);
        } else {
            setToken(token);
            setClientToken(token);
        }
    }, []);

    return !token ? (
        <Login />
     ) : (
        <Router>
            <div className="main-body">
                <Sidebar setToken={token}/>
                <Routes>
                    <Route path="/library" element={<Library />} />
                    <Route path="/feed" element={<Feed />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="player/*" element={<Player />} />
                </Routes>
            </div>
        </Router>
    )
}

