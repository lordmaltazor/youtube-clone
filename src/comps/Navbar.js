import React, { useState } from 'react'
import { auth } from '../FirebaseConfig'

export default function Navbar({ setPage }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // If the mobile hamburger-menu is currently open

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    return (
        <div className="navbar">
            <button className="navbar-button navbar-title" onClick={() => setPage(0)}>YuoTube</button>
            <div className="navbar-spacer"></div>
            <button className="navbar-button navbar-home-button" onClick={() => setPage(0)}>Home</button>
            <button className="navbar-button navbar-sign-out-button" onClick={() => auth.signOut()}>Sign out</button>
            <button className="button navbar-upload-button" onClick={() => setPage(2)}>Upload</button>

            <button className="navbar-mobile-button" onClick={toggleMobileMenu}>
                <i className="fas fa-bars"></i>
            </button>

            {mobileMenuOpen && <div className="mobile-menu">
                <button className="button mobile-menu-button" onClick={() => {
                    setPage(0);
                    setMobileMenuOpen(false);
                }}>Home</button>

                <button className="button mobile-menu-button" onClick={() => {
                    auth.signOut();
                    setMobileMenuOpen(false);
                }}>Sign out</button>

                <button className="button mobile-menu-button" onClick={() => {
                    setPage(2);
                    setMobileMenuOpen(false);
                }}>Upload</button>

                <button className="mobile-menu-close-button" onClick={() => setMobileMenuOpen(false)}>
                    <i className="fas fa-times"></i>
                </button>
            </div>}
        </div>
    )
}
