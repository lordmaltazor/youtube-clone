import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { firestore } from './FirebaseConfig';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Navbar from './comps/Navbar';
import HomePage from './comps/HomePage';
import VideoPage from './comps/VideoPage';
import UploadVideoPage from './comps/UploadVideoPage';

export default function App() {
    const [page, setPage] = useState(0); // 0 = home | 1 = watch video | 2 = upload video

    const [videos, setVideos] = useState([]);
    const [thumbnails, setThumbnails] = useState([]);

    const [currentVideo, setCurrentVideo] = useState(null); // The video we're currently watching
    const [currentVideoIndex, setCurrentVideoIndex] = useState(null); // The index of the video we're currently watching

    const videosRef = firestore.collection('videos');
    const [videoDocs] = useCollectionData(videosRef, { idField: 'id' }); // All the firestore documents of videos

    useEffect(() => {
        // IMPORTANT!!! When we use the "listAll" function, it returns the items sordet alphabetically a-z. The thumbnail and the video itself therefore have the same name

        setVideos([]);
        setThumbnails([]);

        // Get all video files from firebase storage
        firebase.storage().ref().child('videos/').listAll().then((list) => {
            setVideos(list.items);
        });

        // Get all thumbnail files from firebase storage
        firebase.storage().ref().child('thumbnails/').listAll().then((list) => {
            setThumbnails(list.items);
        });
    }, [page])

    return (
        <div className="app">
            <Navbar setPage={setPage} />

            {page === 2 ?
                <UploadVideoPage setPage={setPage} /> :
                page === 1 ? <VideoPage video={currentVideo} videoDoc={videoDocs[currentVideoIndex]} /> :
                    <HomePage videos={videos} thumbnails={thumbnails} videoDocs={videoDocs} setPage={setPage} setCurrentVideo={setCurrentVideo} setCurrentVideoIndex={setCurrentVideoIndex} />}
        </div>
    );
}
