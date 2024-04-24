import React,{useState} from 'react'
import axios from 'axios';
const Product = () => {
    const [Title, setTitle] = useState("");
    const [Price, setPrice] = useState(0);
    const [Description, setDescription] = useState("");  
    
    const createProduct = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newProduct = { 
            Title, 
            Price, 
            Description 
        };
        console.log("=======>  This new product is created...",newProduct);
    };

    axios.post('http://localhost:8000/api/Products/new',newProduct)
    .then(response=>{console.log(response)
    .catch(err=>{console.log(err)});
})

  return (
    <div>
        <form onSubmit={ createProduct }>
            <div>
                <h1>Product Manager</h1>
                <div>
                    <h3>Title </h3>
                    <input type="text" onChange={ (e) => setTitle(e.target.value) }/>
                </div>
                <div>
                    <h3>Price </h3>
                    <input type="text" onChange={ (e) => setPrice(e.target.value) }/>
                </div>
                <div>
                    <h3>Description </h3>
                    <input type="text" onChange={ (e) => setDescription(e.target.value) }/>
                </div>
                <div>
                    <button type="submit" value="Create Product">Create</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Product