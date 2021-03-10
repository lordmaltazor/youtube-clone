import React, { useState } from 'react';
import thumbnailFallback from '../images/noThumbnailFallback.png';

export default function VideoThumbnail({ video, onClick }) {
    const [thumbnailURL, setThumbnailURL] = useState(video.thumbnailURL);

    const titleCase = (str) => {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {

            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }

        return splitStr.join(' ');
    }

    return (
        <button className="video-thumbnail" onClick={onClick}>
            <div className="thumbnail-container">
                <img className="thumbnail" src={thumbnailURL} onError={() => setThumbnailURL(thumbnailFallback)} alt="Video Thumbnail" />
            </div>
            <p className="video-thumbnail-text">{video.title}</p>
            <p className="video-thumbnail-text gray-text">{titleCase(video.poster)}</p>
            <p className="video-thumbnail-text gray-text">{video.views} {video.views === 1 ? 'View' : 'Views'} • {video.createdAt && video.createdAt.toDate().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </button>
    )
}
