
import axios from 'axios';
import './App.css';
//import ButtonFetch from './components/ButtonFetch';
import React, { useState } from 'react'


function App() {

  const [pokemon1, Setpokemon] = useState([])

  const getAllPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then(response => {
        Setpokemon(response.data.results)
        console.log(response);
        console.log(pokemon1);


      }).catch(err => {
        console.log(err);
        console.log("=========> Not exist list or ....")
      })
  }

  return (
    <div className="App">
      <button onClick={getAllPokemons}>Fetch pokemon</button>
      {/* {JSON.stringify(pokemon1)} */}
      <ul>{pokemon1.map(poke => (<li>{poke.name}</li>))}</ul>
    
    </div> 
  );
}

export default App;
