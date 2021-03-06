import React from 'react';
import VideoThumbnail from './VideoThumbnail';

export default function HomePage({ videos, setPage, setCurrentVideoIndex }) {
    return (
        <div className="homepage">
            <div className="videos">
                {videos.length > 0 ? videos.map((video, index) => <VideoThumbnail key={index} video={video} onClick={() => {
                    setCurrentVideoIndex(index);
                    setPage(1);
                }} />) :
                    <p className="no-videos-message">There are no videos here yet! Click the "upload" button in the navigation-bar to upload the first video!</p>}
            </div>
        </div>
    )
}
