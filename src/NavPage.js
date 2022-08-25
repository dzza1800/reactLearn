
import './App.css';
import Login from './login.jsx';
import Bar from './About.jsx';
import {Routes, Route, Router} from 'react-router-dom';

function Page() {
  return (

      <Router>
        <Bar/>
        <Routes>
          <Route exact path = "/login">
            <Login />
          </Route>
        </Routes>
        </Router>

  );
}

export default Page;