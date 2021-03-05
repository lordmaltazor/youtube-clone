import React from 'react'

export default function Navbar({ setPage }) {
    return (
        <div className="navbar">
            <button className="navbar-button title" onClick={() => setPage(0)}>YuoTube</button>
            <div className="navbar-spacer"></div>
            <button className="navbar-button" onClick={() => setPage(0)}>Home</button>
            <button className="navbar-button" onClick={() => setPage(2)}>Upload</button>
        </div>
    )
}
