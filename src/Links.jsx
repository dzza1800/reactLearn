import {Link} from 'react-router-dom';

const navLink = () => {
    return (
    <>
    <Link className="App-link2" to="/">Home</Link>
    <Link className = "App-link2" to="/Login">Login</Link>
    <Link className="App-link2" to="/Gen">Gen</Link>
    <Link className = "App-link2" to="/Adding">Basket</Link>
    <Link className = "App-link2" to="/Movie">Movie Search</Link>
    </>
    );
}
export default navLink;