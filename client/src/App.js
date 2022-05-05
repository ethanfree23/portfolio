import './App.scss';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import NavBar from './Components/NavBar.js'
import HomePage from './Pages/HomePage.js'
import AboutPage from './Pages/AboutPage.js'
import PortfolioPage from './Pages/PortfolioPage.js'
import BlogsPage from './Pages/BlogsPage.js'
import ContactPage from './Pages/ContactPage.js'

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle)
  }

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className='main-content'>
        <div className="content">
          <Routes>

            <Route path="/" element={<HomePage />} />

            <Route path="/about" element={<AboutPage />} />

            <Route path="/portfolio" element={<PortfolioPage />} />

            <Route path="/blogs" element={<BlogsPage />} />

            <Route path="/contact" element={<ContactPage />} />

          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;