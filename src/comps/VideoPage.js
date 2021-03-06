import React, { useState, useEffect } from 'react'
import firebase from 'firebase';
import { firestore } from '../FirebaseConfig';

export default function VideoPage({ videoURL, video }) {
    const [hasLikedVideo, setHasLikedVideo] = useState(false);

    useEffect(() => {
        // Add another view
        firestore.collection('videos').doc(video.id).update({
            views: firebase.firestore.FieldValue.increment(1)
        });
    }, [])

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

    const toggleLike = () => {
        if (hasLikedVideo) {
            setHasLikedVideo(false);

            firestore.collection('videos').doc(video.id).update({
                likes: firebase.firestore.FieldValue.increment(-1)
            });
        }
        else {
            setHasLikedVideo(true);

            firestore.collection('videos').doc(video.id).update({
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
                    <p className="video-stat">{video.title}</p>
                    <p className="video-stat gray-text">{titleCase(video.poster)}</p>
                    <p className="video-stat gray-text">{video.views} {video.views === 1 ? 'View' : 'Views'} • {video.createdAt.toDate().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>

                <button className="video-like-button" onClick={toggleLike}>
                    <i className="fas fa-thumbs-up" style={{ color: hasLikedVideo ? 'red' : 'white' }}></i>

                    <p className="video-stat">{video.likes} {video.likes === 1 ? 'Like' : 'Likes'}</p>
                </button>
            </div>
        </div>
    )
}
