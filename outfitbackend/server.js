// Importing the express framework for the Node.js
// import  express  from "express";
const express = require("express");
//Importing the mysql database for the interaction with the node.js
// import mysql from 'mysql';
const mysql = require("mysql");
//Importing the Cross-Origin Resource Sharing(CORS) for allowing requests from different origins.
// import cors from 'jsonwebtoken';
const cors = require('cors');
//Importing the jwt.
// import  jwt  from "jsonwebtoken";
const jwt = require('jsonwebtoken');
//Importing the encryption.
// import bcrypt from 'bcrypt';
const bcrypt= require('bcrypt');
//Importing the cookieparser.
const cookieParser= require('cookie-parser');

// import cookieParser from "cookie-parser";


//Creating the instances of the express application and mounting the CORS middleware for cross-origin requests.
const app = express();
//formatting into the Json 
app.use(express.json());
app.use(cors(
    {
        origin: ['http://localhost:3000'],
        methods: ["POST, GET"],
        credentials: true,
    }

));
//Using the cookieParser.
app.use(cookieParser());


//Creating the connection to the Database by following configuration.
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "OutfitStack"
})

//Defining the route to handle POST request to '/Register' endpoint.
app.post('/register', (req, res) => {
    console.log("request received");
    //Sql query for inserting the data into the login table.
    const sql = "INSERT INTO user (`name`,`email`,`phonenumber`,`address`,`password`) VALUES (?)";
    //Array containing the data that must included into the database.
    const values = [
        req.body.name,
        req.body.email,
        req.body.phonenumber,
        req.body.address,
        req.body.password
    ]

    //IT helps to execute the sql query with the provided values.
    db.query(sql, [values], (err, data) => {
        if (err) {
            res.status(500).json({
                message: "Internal server error",
            });
        }
        res.status(200).json({
            message: "Successful valid",
        });

    })

})


app.post('/login', (req, res) => {
    console.log("request received");
    //Sql query for extracting the data from user table.
    const sql = "SELECT * FROM user WHERE email= ? AND password =?";
    //Array containing the data that must included into the database.
    // const values = [
    //     req.body.email,
    //     req.body.password
    // ]
    
    //IT helps to execute the sql query with the provided values.
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if(err) return res.json({Message: "Server Side Error"});
        if(data.length >0){
            const name= data[5].name;
            const token = jwt.sign({name}, "our-jsonwebtoken-secret-key", {expiresIn: '1d'});
            res.cookie('token', token);
            return res.json({Status: "successful login"})

        } else{
            return res.json({Message: "No Records existed"});

        }

        // if (err) {
        //     res.status(500).json({
        //         message: "Internal server error",
        //     });
        // }
        // res.status(200).json({
        //     message: "Successful valid",
        // });

    })

})




//Making the get method.
app.post("/home", (req, res) => {
    console.log("welcome to our place");
    res.send("Hello World");
})




app.listen(8081, () => {
    console.log("Running");
})