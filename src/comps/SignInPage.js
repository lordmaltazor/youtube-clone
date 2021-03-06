import React from 'react';
import firebase from 'firebase';
import { auth } from '../FirebaseConfig';

export default function SignInPage() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);

        alert("You are now signed in to YuoTube!")
    }

    return (
        <div className="sign-in-page">
            <h1 className="sign-in-title">Welcome to YuoTube!</h1>

            <button className="sign-in-button" onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}
