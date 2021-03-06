import React from 'react';
import VideoThumbnail from './VideoThumbnail';

export default function HomePage({ videos, setPage, setCurrentVideoIndex }) {
    //console.log("Videos: " + videos.length + " | Thumbnails: " + thumbnails.length);

    return (
        <div className="homepage">
            <div className="videos">
                {videos.map((video, index) => <VideoThumbnail key={index} video={video} onClick={() => {
                    setCurrentVideoIndex(index);
                    setPage(1);
                }} />)}
            </div>
        </div>
    )
}
