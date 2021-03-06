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

    function titleCase(str) {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            // You do not need to check if i is larger than splitStr length, as your for does that for you
            // Assign it back to the array
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        // Directly return the joined string
        return splitStr.join(' ');
    }

    return (
        <button className="video-thumbnail" onClick={onClick}>
            <div className="thumbnail-container">
                <img className="thumbnail" src={thumbnailURL} alt="Video Thumbnail" />
            </div>
            <p className="video-thumbnail-title">{title}</p>
            <p className="video-thumbnail-views gray-text">{titleCase(videoDoc.poster)}</p>
            <p className="video-thumbnail-views gray-text">{videoDoc.views} {videoDoc.views === 1 ? 'View' : 'Views'} • {videoDoc.createdAt && videoDoc.createdAt.toDate().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </button>
    )
}
