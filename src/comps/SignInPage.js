import React from 'react';
import firebase from 'firebase';
import { auth } from '../FirebaseConfig';

export default function SignInPage() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <div className="sign-in-page">
            <h1 className="sign-in-title">Welcome to YuoTube!</h1>

            <h2 className="sign-in-description">The best video sharing platform on the Internet - Made by <a href="https://github.com/lordmaltazor" target="_blank">Malte Svensén</a></h2>

            <button className="button sign-in-button" onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}
