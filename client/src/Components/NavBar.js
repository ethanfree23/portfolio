import React from 'react'
import avatar from '../img/Headshot.JPG';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img src={avatar} alt="" />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassname="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" exact activeClassname="active">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio" exact activeClassname="active">
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blogs" exact activeClassname="active">
              Blogs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" exact activeClassname="active">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/video-demos" exact activeClassname="active">
              Video Demos
            </NavLink>
          </li>
        </ul>
        <footer className="footer">
          <p> @2022 Copyright
          </p>
        </footer>
      </nav>
    </div>
  )
}

export default NavBar