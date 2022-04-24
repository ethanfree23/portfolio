import './App.scss';
import NavBar from './Components/NavBar.js'

function App() {
  return (
    <div className='App'>
      <div className='sidebar'></div>
      <div className='main-content'>
        <NavBar />
      </div>
    </div>
  );
}

export default App;