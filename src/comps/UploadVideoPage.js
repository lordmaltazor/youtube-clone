import React, { useState, useRef } from 'react';
import '../App.css';
import firebase from 'firebase';
import { firestore } from '../FirebaseConfig';

export default function UploadVideoPage({ user, setPage }) {
    const videoFileInput = useRef(null);
    const thumbnailFileInput = useRef(null);

    const [video, setVideo] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const [videoTitle, setVideoTitle] = useState('');

    const [uploadingVideo, setUploadingVideo] = useState(false); // Whether or not we are currently in the process of uploading a new video to firebase

    const videosRef = firestore.collection('videos');

    const bytesToMb = (bytes) => {
        if (bytes === 0) return 'n/a'
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
        if (i === 0) return bytes
        return (bytes / (1024 ** i)).toFixed(1)
    }

    const updateVideo = (e) => {
        const file = e.target.files[0];

        if (bytesToMb(file.size) < 10) {
            setVideo(file);

            console.log("Added " + videoFileInput.current.files[0].name + "!");
        }
        else {
            alert(`Your files cannot be bigger than 10mb, yours was ${bytesToMb(file.size)}mb!`);
        }
    }

    const updateThumbnail = (e) => {
        setThumbnail(e.target.files[0]);

        //console.log("Added " + videoFileInput.current.files[0].name + "!");
    }

    const updateVideoTitle = (e) => {
        setVideoTitle(e.target.value);
    }

    const postVideo = async () => {
        if (videoTitle == '') {
            alert("You have to enter a video title!");

            return;
        }

        setUploadingVideo(true);

        // Upload video to firebase storage
        const videoStorageRef = firebase.storage().ref().child(`videos/${videoTitle}`);
        await videoStorageRef.put(video);

        // Upload thumbnail to firebase storage
        const thumbnailStorageRef = firebase.storage().ref().child(`thumbnails/${videoTitle}`);
        await thumbnailStorageRef.put(thumbnail);

        // Add video document to firestore
        await videosRef.add({
            title: videoTitle,
            poster: user.displayName,
            views: 0,
            likes: 0,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        setUploadingVideo(false);

        setPage(0);
    }

    return (
        <div className="upload-video-page">
            <h1 className="upload-video-title">Upload a new video to yuotube:</h1>

            {!video && <button className="select-file-button" onClick={() => videoFileInput.current.click()}>Choose Video</button>}
            {!thumbnail && <button className="select-file-button" onClick={() => thumbnailFileInput.current.click()}>Choose Thumbnail</button>}

            <input className="file-input" ref={videoFileInput} onChange={updateVideo} type="file" accept="video/*" />
            <input className="file-input" ref={thumbnailFileInput} onChange={updateThumbnail} type="file" accept="image/*" />

            {video && thumbnail && <input className="video-title-input" onChange={updateVideoTitle} type="text" placeholder="Video title" />}

            {video && thumbnail && <button className="post-video-button" onClick={postVideo}>Post</button>}

            {uploadingVideo && <div className="uploading-video-modal">
                <div className="loading-circle"></div>

                <p className="uploading-video-text">Uploading video...</p>
            </div>}
        </div>
    );
}