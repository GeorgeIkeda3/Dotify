import React from 'react';
import "./albumInfo.css";

export default function AlbumInfo({ album }) {
    const artists = [];
    album?.artists?.forEach(element => {
        artists.push(element.name);
    });

    return <div className="info-card">
        <div className="albumName">
            <div className="scroll">
                <p>{album?.name + " - " + artists?.join(", ")}</p>
            </div>
        </div>
    </div>;
}