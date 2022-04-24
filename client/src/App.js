import './App.scss';
import NavBar from './Components/NavBar.js'
import HomePage from './Pages/HomePage.js'
import AboutPage from './Pages/AboutPage.js'
import PortfolioPage from './Pages/PortfolioPage.js'
import BlogsPage from './Pages/BlogsPage.js'
import ContactPage from './Pages/ContactPage.js'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <div className='sidebar'>
        <NavBar />
      </div>
      <div className='main-content'>
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/portfolio" exact>
              <PortfolioPage />
            </Route>
            <Route path="/blogs" exact>
              <BlogsPage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;