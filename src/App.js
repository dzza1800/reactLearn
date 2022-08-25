import logo from './bbsWheel.png';
import './App.css';
import Login from './login.jsx';
import Bar from './About.jsx';
import {Routes, Route, Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Bar/>
        <Routes>
          <Route exact path = "/login">
            <Login />
          </Route>
        </Routes>
        </Router>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Exercise done, im the best
        </p>
        <a href="https://dzza1800.github.io/myPortfolio/HomePage.html" className="App-link" target="_blank" rel="noopener noreferrer"> The link to my portfolio </a>
      </header>
    </div>
  );
}

export default App;
