import React from 'react';
import "./albumImage.css";

export default function AlbumImage({ url }) {
    return <div>
        <div className="image flex">
            <img src={url} alt="Album Art" className="image-art" />
        </div>
    </div>
}