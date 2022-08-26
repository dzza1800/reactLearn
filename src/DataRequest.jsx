import Links from './Links.jsx';
const { default: axios } = require("axios");
const { useState, useEffect } = require("react");


const MovieInfo = () =>{
    const [error, setError] = useState(null);
    const [api, setApi] = useState("");
    const [item, setItem] = useState("");

    const updateApi = e =>{
        e.preventDefault();
        setApi(e.target.value);
    }

    const updateItem = e =>{
        e.preventDefault();
        setItem(e.target.value);
    }

    const dataRequest = (e) => {
        axios.get("https://www.omdbapi.com/?apikey=" + api + "&t="+ item).then((res) => res).then(
            (result) =>{
                setItem(result.data)
            },
            (error) => {
                setError(error);
            });
    }; 

    return(
        <div className='App'>
      <header className='App-header'>
      <Links />
      <h1>Movie is : {[item.Title]} </h1>
      <img src={item.Poster}></img>
      <input type="text" className='blah' onChange={updateApi}></input>
      <input type="text" className='blah' onChange={updateItem}></input>
      <button onClick={(details) => dataRequest(details)}>Search</button>
  </header>
  </div>

);

}
export default MovieInfo;

