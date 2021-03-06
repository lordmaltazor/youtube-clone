import React from 'react';

export default function VideoThumbnail({ video, onClick }) {
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
                <img className="thumbnail" src={video.thumbnailURL} alt="Video Thumbnail" />
            </div>
            <p className="video-thumbnail-title">{video.title}</p>
            <p className="video-thumbnail-views gray-text">{titleCase(video.poster)}</p>
            <p className="video-thumbnail-views gray-text">{video.views} {video.views === 1 ? 'View' : 'Views'} • {video.createdAt && video.createdAt.toDate().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </button>
    )
}
