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
    database: "OutfitStack"
})

//Defining the route to handle POST request to '/Register' endpoint.
app.post('/OutfitStack', (req,res)=>{
    console.log("request received");
    //Sql query for inserting the data into the login table.
    const sql= "INSERT INTO user (`name`,`email`,`phonenumber`,`address`,`password`) VALUES (?)";
   //Array containing the data that must included into the database.
    const values =[
        req.body.name,
        req.body.email,
        req.body.phonenumber,
        req.body.address,
        req.body.password
    ]

    //IT helps to execute the sql query with the provided values.
    db.query(sql, [values], (err, data)=>{
        if(err){
            res.status(500).json({
                message: "Internal server error",
              });
        }
        res.status(200).json({
            message: "Successful valid",
          });

    })

})

//Making the get method.
app.get("/home",(req,res)=>{
    res.send("Hello World");
})



app.listen(8081, ()=>{
    console.log("listening");
})