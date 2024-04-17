
import './App.css';
//import ButtonFetch from './components/ButtonFetch';
import React, { useState } from 'react'


function App() {

  const [pokemon1, Setpokemon] = useState([])

  const getAllPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then(response => {
        console.log("=========> All list of the pokemons", response)
        return (response.json())

      }).then(response => {
        Setpokemon(response.results)
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
