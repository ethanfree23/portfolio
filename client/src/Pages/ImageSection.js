import React from 'react'
import about from '../img/MeSurfing.jpeg'

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>I am <span> Ethan Freeman</span></h4>
                <p className="about-text">
                    Do you want a piece of this? I can do lots of things including speak with people.
                    Unlike some of the tech folk out there, I can hold a smooth conversation.
                    Girls want to fuck me.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Contact Information</p>
                    </div>
                    <div className="right-section">
                        <p>: Ethan Freeman</p>
                        <p>: 28 lightyears old</p>
                        <p>: USA</p>
                        <p>: English | Spanish | Portuguese</p>
                        <p>: Houston, Texas</p>
                        <p>: 719.339.5617</p>
                    </div>
                </div>
                <button className="btn">Download CV</button>
            </div>
        </div>
    )
}

export default ImageSection