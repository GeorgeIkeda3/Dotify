import React , {useState, useEffect} from 'react';
import apiClient from "../../spotify";
import './library.css';
import { useNavigate } from "react-router-dom";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IconContext } from "react-icons";

export default function Library() {
    const [playlists, setPlaylists] = useState(null);

    useEffect(() => {
        apiClient.get("me/playlists").then(function (response) {
            setPlaylists(response.data.items);
            console.log(response.data.items);
        });
    }, []);

    const navigate = useNavigate();

    const playPlaylist = (id) => {
        navigate("/player", {state: {id: id}});
    }

    return (
        <div className="screen-container">
            <div className="body-library">
                {playlists?.map((playlist) => (
                    <div className="cards" key={playlist.id} onClick={() => playPlaylist(playlist.id)}>
                        <img src={playlist.images[0].url} className="image-card" alt="Albums" />
                        <p className="title">{playlist.name}</p>
                        <p className="subtitle">{playlist.tracks.total} songs</p>
                        <div className="button">
                            <IconContext.Provider value={{ size: "30px", color: "black" }}>
                                <FaRegCirclePlay />
                            </IconContext.Provider>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}