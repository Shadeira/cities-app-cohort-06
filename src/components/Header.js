import React from 'react'

export default function Header({user}) {
    return (
        <div className="header-container">
        <div className="nav-container">
            <a href="/"> Home</a>
            <a href="/contact"> Contact Us</a>
            <a href="/about"> About Us</a>
            </div>
            <div className="profile-container">
            <img className="profile-image"src={user.avatarUrl} alt="profile"/>
            <p>{user.firstName}</p>

             </div>
        </div>
    )
}
