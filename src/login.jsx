import { useState } from 'react';
import './App.css';
import Links from './Links.jsx';
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const saveUser = event => {
        setUsername(event.target.value);
    };

    const savePass = event => {
        setPassword(event.target.value);
    };

    return(

        <div className='App'>
        <header className='App-header'>
           <Links />
            <h1>Username is : {username} </h1>
            <h2>Password is: {password} </h2>
            <input type="text" className='blah' value={username} onChange={saveUser}></input>
            <input type="text" className='blah' value={password} onChange={savePass}></input>
    </header>
    </div>
    );  

}

export default Login;

