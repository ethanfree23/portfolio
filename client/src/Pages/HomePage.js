import React from 'react'
import { faLinkedin, faGithub, faMedium, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Ethan Freeman =
                    <br /><span> (Software + Sales)Engineerⁿ</span>
                </h1>
                <p className="h-sub-text">
                    Welcome to my portfolio website - I appreciate you taking time to see what I am about!<br />
                    <strong>Currently:</strong> I am seeking employment as a Sales Engineer - I love helping clients transition from prospects to life-long customers.<br />
                    <strong>Previously: </strong> Software Sales Engineer (HubOEM) & Surgical Sales Engineer (NuVasive & DePuy Synthes) <br/> Leveled up - sales engineering, product demos, customer service, onboarding, & troubleshooting.<br />
                    <strong>Next:</strong> Help enterprise customers utilize their software to the highest capability.
                </p>
                <div className="icons">
                    <Link className="icon-holder" >
                        <FontAwesomeIcon icon={faLinkedin} className="icon li" />
                    </Link> <br />
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link className="icon-holder" >
                        <FontAwesomeIcon icon={faMedium} className="icon md" />
                    </Link><br />
                    <Link className="icon-holder" >
                        <FontAwesomeIcon icon={faYoutube} className="icon yt" />
                    </Link>
                </div>
            </header>

        </div>
    )
}

export default HomePage;