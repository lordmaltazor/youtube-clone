import React, { useState, useEffect } from 'react'
import firebase from 'firebase';
import { firestore } from '../FirebaseConfig';

export default function VideoPage({ video, videoDoc }) {
    const [videoURL, setVideoURL] = useState('');

    const [hasLikedVideo, setHasLikedVideo] = useState(false);

    useEffect(() => {
        // Add another view
        firestore.collection('videos').doc(videoDoc.id).update({
            views: firebase.firestore.FieldValue.increment(1)
        });

        // Get the url for the video
        video.getDownloadURL().then((url) => {
            setVideoURL(url);

            //console.log(url);
        })
    }, [])

    const toggleLike = () => {
        if (hasLikedVideo) {
            setHasLikedVideo(false);

            firestore.collection('videos').doc(videoDoc.id).update({
                likes: firebase.firestore.FieldValue.increment(-1)
            });
        }
        else {
            setHasLikedVideo(true);

            firestore.collection('videos').doc(videoDoc.id).update({
                likes: firebase.firestore.FieldValue.increment(1)
            });
        }
    }

    return (
        <div className="video-page">
            <div className="video-container">
                <video src={videoURL} controls autoPlay>
                    Sorry, your browser doesn't support embedded videos.
                </video>
            </div>

            <div className="video-info">
                <div className="video-stats">
                    <p className="video-stat">{video.name}</p>
                    <p className="video-stat">{videoDoc.views} Views</p>
                </div>

                <button className="video-like-button" onClick={toggleLike}>
                    <i class="fas fa-thumbs-up" style={{ color: hasLikedVideo ? 'red' : 'white' }}></i>

                    <p className="video-stat">{videoDoc.likes} {videoDoc.likes === 1 ? 'Like' : 'Likes'}</p>
                </button>
            </div>
        </div>
    )
}
