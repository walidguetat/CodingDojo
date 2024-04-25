import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Create = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [ErrorState, setError] = useState([])
  const nav = useNavigate();
  const SubmitHandler = (e) => {
    e.preventDefault();
    const newObj = {
      title,
      price,
      description
    };
    axios
      .post("http://localhost:8000/api/products/", newObj)
      .then((res) => {
        console.log("✅✅✅✅✅✅", res.data._id);
        //nav("/");
        nav("/products/" + res.data._id)
      })
      .catch((err) => {
        console.log(err.response.data.errors.title);
        const ServerErrors = err.response.data.errors
        const errArray = []
        for (const key of Object.keys(ServerErrors)) {
            errArray.push(ServerErrors[key].message)
        }
        setError(errArray)

    })
}

  return (
    <div>
      <form onSubmit={SubmitHandler}>
    

    {/* card */}



    <div className="card" style={{width:400}}>
      <div className="card-body">


                {
                    ErrorState.map((err) => {
                        return <p style={{ color: "red" }}>{err}</p>
                    })
                }


      
        title :{" "}
        <input
          value={title}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />{" "}
        <br />
        
        price :{" "}
        <input
          value={price}
          type="number"
          onChange={(e) => setPrice(e.target.value)}
        />{" "}
        <br />
        
        description :{" "}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />{" "}
        <br />
        <br />
        <button type="button" className="btn btn-success">Success</button>
      </div>
    </div>


      </form>
    </div>
  );
};

export default Create;
