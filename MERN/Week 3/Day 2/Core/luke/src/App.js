
import './App.css';
import React from 'react';
import Form from './components/Form';
import { Route ,Routes,Link} from 'react-router-dom';
import { useParams } from "react-router";
const {name}=useParams();
const { id } = useParams();
const Home = (props) => {
  return (
    <div>
        <Link to={"/"}></Link>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/:name/:id' element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
