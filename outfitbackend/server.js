// Importing the express framework for the Node.js
const express = require("express");
//Importing the mysql database for the interaction with the node.js
const mysql = require("mysql");
//Importing the Cross-Origin Resource Sharing(CORS) for allowing requests from different origins.
const cors = require('cors');

//Creating the instances of the express application and mounting the CORS middleware for cross-origin requests.
const app= express();
app.use(cors());
//formatting into the Json 
app.use(express.json());


//Creating the connection to the Database by following configuration.
const db= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "register"
})

//Defining the route to handle POST request to '/Register' endpoint.
app.post('/register', (req,res)=>{
    //Sql query for inserting the data into the login table.
    const sql= "INSERT INTO login (`name`,`email`,`phonenumber`,`address`,`createpassword`,`confirmpassword`) VALUES (?)";
   //Array containing the data that must included into the database.
    const values =[
        req.body.name,
        req.body.email,
        req.body.phonenumber,
        req.body.address,
        req.body.createpassword,
        req.body.confirmpassword
    ]

    //IT helps to execute the sql query with the provided values.
    db.query(sql, [values], (err, data)=>{
        if(err){
            return res.json("Error");
        }
        return res.json(data);

    })

})


app.listen(8081, ()=>{
    console.log("listening");
})