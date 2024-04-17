import './App.css';

import React from "react";
import { useParams } from "react-router";
import {
  Routes,
  Route,
  //Link 
} from "react-router-dom";
// component route home    
const Home = (props) => {
  return (
    <div>
        <h1 style={{color: "red"}}>Welcome</h1> 
    </div>
  );
}

// component route number  print number
const Num = (props) => { 
  const { number } = useParams(); // matches our :city in our Routes
    
  return (
    <h1>The number is : { number }</h1>
  );
}

// component route text print text
const Text = (props) => { 
  const { text } = useParams(); 
    
  return (
    <h1>The word is : { text }</h1>
  );
}

// component route style print text
const Style = (props) => {
  const { text } = useParams(); 
  const { text_color } = useParams(); 
  const { h1_color } = useParams();  
  return (
    <h1 style={{color:{text_color}, backgroundColor:{h1_color}}}>The word is : { text }</h1>
  );
}


function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path="/home" element={<Home />} />
        <Route path="/:number" element={<Num />} />
        <Route path="/:text" element={<Text />} />
        <Route path="/:text/:text_color/:h1_color" element={<Style />} />
        
      </Routes>
    </div>
  );
}

export default App;
