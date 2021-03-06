import React from 'react';
import VideoThumbnail from './VideoThumbnail';

export default function HomePage({ videos, thumbnails, videoDocs, setPage, setCurrentVideo, setCurrentVideoIndex }) {
    //console.log("Videos: " + videos.length + " | Thumbnails: " + thumbnails.length);

    return (
        <div className="homepage">
            <div className="videos">
                {videos.map((video, index) => <VideoThumbnail key={index} title={video.name} thumbnail={thumbnails[index]} videoDoc={videoDocs[index]} onClick={() => {
                    setCurrentVideoIndex(index);
                    setCurrentVideo(video);
                    setPage(1);
                }} />)}
            </div>
        </div>
    )
}
