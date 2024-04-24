import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Product from './components/Product';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/api/createproduct' element={<Product/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
