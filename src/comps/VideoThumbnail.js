import React, { useState, useEffect } from 'react';

export default function VideoThumbnail({ title, thumbnail, videoDoc, onClick }) {
    const [thumbnailURL, setThumbnailURL] = useState('');

    useEffect(() => {
        // The thumbnail downlaod URL is unavailable the first few frames
        if (!thumbnail) {
            //console.log(`The thumbnail for "${title}" was unavailable!`);

            return;
        }

        thumbnail.getDownloadURL().then((url) => {
            setThumbnailURL(url);
        })
    }, [thumbnail])

    return (
        <button className="video-thumbnail" onClick={onClick}>
            <div className="thumbnail-container">
                <img className="thumbnail" src={thumbnailURL} alt="Video Thumbnail" />
            </div>
            <p className="video-thumbnail-title">{title}</p>
            <p className="video-thumbnail-views">{videoDoc && videoDoc.views} Views</p>
        </button>
    )
}
