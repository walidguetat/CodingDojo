import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstname, setfirstname] = useState("");
    const [firstnameError, setfirstnameError] = useState("");
    const [lastname, setlastname] = useState("");
    const [lastnameError, setlastnameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setemailError] = useState("");
    const [password, setPassword] = useState(""); 
    const [passwordError, setpasswordError] = useState(""); 
    const [ConfirmPassword, setConfirmPassword] = useState(""); 
    const [confirmpasswordError, setconfirmpasswordError] = useState(""); 
    // handle first name
    const handlefirstname = (e) => {
        setfirstname(e.target.value);
        if(e.target.value.length < 1) {
            setfirstnameError("First name is required!");
        } else if(e.target.value.length < 2) {
            setfirstnameError("first name must be 3 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setfirstnameError("");
        }
    }
    // handle last name
    const handlelastname = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setlastnameError("Last name is required!");
        } else if(e.target.value.length < 2) {
            setlastnameError("Last name must be 3 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setlastnameError("");
        }
    }

    // handle email
    const handleemail = (e) => {
        setlastname(e.target.value);
        if(e.target.value.length < 1) {
            setemailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setemailError("Email must be 5 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setemailError("");
        }
    }

    // handle password
    const handlepassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setpasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setpasswordError("Password must be 8 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setpasswordError("");
        }
    }

    // handle confirm password
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 1) {
            setconfirmpasswordError("Confirm Password is required!");
        } else if(e.target.value.length < 8) {
            setconfirmpasswordError("Confirm Password must be 8 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setconfirmpasswordError("");
        }
    }

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
                <input type="text" onChange={ handlefirstname } />
                {
                    firstnameError ? 
                    <p>{ firstnameError }</p>:
                    ''     
                }
            </div>
            <div className='box'>
                <label>Last name: </label> 
                <input type="text" onChange={ handlelastname } />
                {
                    lastnameError ? 
                    <p>{ lastnameError }</p>:
                    ''     
                }
            </div>
            <div className='box'>
                <label>Email Address: </label> 
                <input type="email" onChange={ handleemail } />
                {
                    emailError ? 
                    <p>{ emailError }</p>:
                    ''     
                }
            </div>
            <div className='box'>
                <label>Password: </label>
                <input type="password" onChange={ handlepassword } />
                {
                    passwordError ? 
                    <p>{ passwordError }</p>:
                    ''     
                }
            </div>
            <div className='box'>
                <label>Confirm Password: </label>
                <input type="password" onChange={ handleConfirmPassword } />
                {
                    confirmpasswordError ? 
                    <p>{ confirmpasswordError }</p>:
                    ''     
                }
            </div>

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

