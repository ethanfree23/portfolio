import '../styles/_homepage.scss'

import React from 'react'
import { faLinkedin, faGithub, faMedium, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Wuz up
                    <span> bitchezzz</span>
                </h1>
                <p className="h-sub-text">
                    random stuff. random stuff. random stuff. random stuff. random stuff. random stuff. random stuff. random stuff. random stuff. random stuff. random stuff. random stuff. random stuff. random stuff. random stuff. random stuff.
                    random stuff. random stuff. random stuff. random stuff. random stuff. random stuff. random stuff. random stuff. random stuff. random stuff. random stuff. random stuff. random stuff. random stuff. random stuff. random stuff.
                    random stuff. random stuff. random stuff. random stuff. random stuff. random stuff. random stuff. random stuff. random stuff. random stuff. random stuff. random stuff. random stuff. random stuff. random stuff. random stuff.
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