import React from 'react';
import "./albumInfo.css";

export default function AlbumInfo({ album }) {
    console.log(album);
    return <div>
        <div className="albumName">
            <p></p>
        </div>
        <div className="info">
            <p></p>
        </div>
        <div className="release">
            <p></p>
        </div>
    </div>;
}