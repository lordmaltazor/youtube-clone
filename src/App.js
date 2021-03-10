import React, { useState, useEffect } from 'react';
import { firestore, auth } from './FirebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignInPage from './comps/SignInPage';
import Navbar from './comps/Navbar';
import HomePage from './comps/HomePage';
import VideoPage from './comps/VideoPage';
import UploadVideoPage from './comps/UploadVideoPage';

export default function App() {
    const [user] = useAuthState(auth); // This object is null if the user is not authenticated yet

    const [page, setPage] = useState(0); // 0 = home | 1 = watch video | 2 = upload video

    const videosRef = firestore.collection('videos');
    //const [videos] = useCollectionData(videosRef, { idField: 'id' }); // All the firestore documents of videos
    const [videos, setVideos] = useState([]);

    const [currentVideoIndex, setCurrentVideoIndex] = useState(null); // The index of the video we're currently watching

    useEffect(() => {
        if (!user) {
            return;
        }

        // Get all firestore documents
        videosRef.get().then((documents) => {
            let arr = [];

            for (let i = 0; i < documents.docs.length; i++) {
                arr.push({ id: documents.docs[i].id, ...documents.docs[i].data() });
            }

            setVideos(arr);
        });
    }, [videosRef])

    return (
        <div className="app">
            {user && <Navbar setPage={setPage} />}

            {!user ? <SignInPage /> :
                page === 2 ? <UploadVideoPage user={user} videos={videos} setPage={setPage} /> :
                    page === 1 ? <VideoPage videoURL={videos[currentVideoIndex].videoURL} video={videos[currentVideoIndex]} /> :
                        <HomePage videos={videos} videoDocs={videos} setPage={setPage} setCurrentVideoIndex={setCurrentVideoIndex} />}
        </div>
    );
}
