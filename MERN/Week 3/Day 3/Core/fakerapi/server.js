//import faker
const faker = require("faker");
const express = require("express");
const app = express();
const port = 8000;

function createUser(){
    const newUser = {
        password:"password",
        email:"email",
        phoneNumber:"phoneNumber",
        lastName:"lastName",
        firstName:"firstname",
        _id:id
    };
    return newUser;
}

const newFakeUser=createUser();
console.log(newFakeUser);

function createCompany(){
    const newCompany = {
        name:"name",
        email:{street:"street",city:"city",state:"state",zipcode:"zipcode",country:"country"},
        _id:id    
    };
    return newCompany;
}

const newFakeCompany=createCompany();
console.log(newFakeCompany);

// route  api for new user

app.get("/api/users/new", (req, res) => {
    res.json( newUser );
});

// route api for company

app.get("/api/companies/new", (req, res) => {
    res.json( newCompany );
});

// route api for new users and compannies

app.get("/api/companies/new", (req, res) => {
    res.json( newUser,newCompany );
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
