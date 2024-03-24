//Importing the mysql database for the interaction with the node.js
const mysql = require("mysql");

const conn= mysql.createConnection({
    user: "root",
    host: 'localhost',
    password: "",
    database: "OutfitStack"

});

conn.connect((error)=>{
    if(error) throw error;
    console.log("connected !")
})

//Exporting the connection to our database.
module.exports= conn