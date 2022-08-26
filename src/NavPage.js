
import './App.css';
import Login from './login.jsx';
import Basket from './Basket.jsx';
import Gen from './lifestyle.jsx';
import App from './App.js';
import Movie from './DataRequest.jsx';
import {Routes, Route} from 'react-router-dom';

function Page() {
  
  return (
    <>
        <Routes>
          <Route exact path = "/"
          element={ <App />}/>
          <Route path = "/Login"
          element = {<Login/>}/>
          <Route path = "/Adding"
          element = {<Basket/>}/>
          <Route path = "/Gen"
          element = {<Gen/>}/>
          <Route path = "/Movie"
          element = {<Movie/>}/>
        </Routes>

        </>
  );
}

export default Page;