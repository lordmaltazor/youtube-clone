import React from 'react'
import { auth } from '../FirebaseConfig'

export default function Navbar({ setPage }) {
    return (
        <div className="navbar">
            <button className="navbar-button navbar-title" onClick={() => setPage(0)}>YuoTube</button>
            <div className="navbar-spacer"></div>
            <button className="navbar-button navbar-home-button" onClick={() => setPage(0)}>Home</button>
            <button className="navbar-button navbar-sign-out-button" onClick={() => auth.signOut()}>Sign out</button>
            <button className="button navbar-upload-button" onClick={() => setPage(2)}>Upload</button>
        </div>
    )
}
