import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [ConfirmPassword, setConfirmPassword] = useState("");  
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newUser = { 
            firstname: firstname,
            lastname: lastname, 
            email: email, 
            password: password,
            ConfirmPassword: ConfirmPassword 
        };
        console.log("Welcome", newUser);
    };
    
    return(
        <form onSubmit={ createUser }>
            <div className='box'>
                <label>First name: </label> 
                <input type="text" onChange={ (e) => setfirstname(e.target.value) } />
            </div>
            <div className='box'>
                <label>Last name: </label> 
                <input type="text" onChange={ (e) => setlastname(e.target.value) } />
            </div>
            <div className='box'>
                <label>Email Address: </label> 
                <input type="email" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div className='box'>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div className='box'>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>

            {/* <input type="submit" value="Create User" /> */}

            <div className='box'>
                <h3>Your form Data</h3>
                <p>First Name : {firstname}</p>
                <p>Last Name : {lastname}</p>
                <p>Email : {email}</p>
                <p>Password : {password}</p>
                <p>Confirm Password : {ConfirmPassword}</p>
            </div>
        </form>

        
    );
};
    
export default UserForm;

// ="keyword operator from-rainbow">