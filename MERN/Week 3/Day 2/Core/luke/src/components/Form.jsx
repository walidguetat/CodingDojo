
import axios from 'axios'
import React,{useState} from 'react'
// user form

const UserForm = (props) => {
    const [name, setname] = useState("");
    const [id, setid] = useState("");
      
    // function create user 
    const getInfo = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newForm = { 
            name: name, 
            id: id 
        };

        
        axios.get(`https://swapi.dev/api/${name}/${id}`)
        .then(response=>{
        console.log("====>true",response);
})
};
// create router component 
const Form = () => {
  return (
    <div className="App">
        <form onSubmit={ getInfo }>
            <h3>Search for : </h3> 
            <select name="name" onClick={(e) => setname(e.target.value)}>
                <option value="">Please choose your choice</option>
                <option value="people">people</option>
                <option value="planets">planets</option>
                <option value="starships">starships</option>
            </select>
            <h3>Id : </h3>
            <input type="text" name="id" onChange={ (e) => setid(e.target.value) }/>
            <p>   </p>
            <button>  Search  </button>
        </form>
    </div>
  )
}
}
export default Form