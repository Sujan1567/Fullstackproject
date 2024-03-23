// Importing the express framework for the Node.js
const express = require("express");

//Importing the mysql database for the interaction with the node.js
const mysql = require("mysql");

//Importing the Cross-Origin Resource Sharing(CORS) for allowing requests from different origins.
const cors = require('cors');

//Importing the jwt.
const jwt = require('jsonwebtoken');

//Importing the encryption.
const bcrypt = require('bcrypt');

//Importing the cookieparser.
const cookieParser = require('cookie-parser');
const salt = 10;


//Creating the instances of the express application and mounting the CORS middleware for cross-origin requests.
const app = express();
//formatting into the Json 
app.use(express.json());
// app.use(cors());
app.use(cors(
    {
        origin: ['http://localhost:3000'],
        methods: ["POST", "GET", "DELETE"],
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
app.post('/Register', (req, res) => {
    console.log("request received");
    //Sql query for inserting the data into the login table.
    const sql = "INSERT INTO user (`name`,`email`,`phonenumber`,`address`,`role`,`password`) VALUES (?)";

    //Password hashing using the bcrpt.
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if (err) return res.json({ Error: "Error for hashing password" });

        //Array containing the data that must included into the database.
        const values = [
            req.body.name,
            req.body.email,
            req.body.phonenumber,
            req.body.address,
            req.body.role,
            hash
        ]
        //IT helps to execute the sql query with the provided values.
        db.query(sql, [values], (err, result) => {
            if (err) return res.json({ Error: "Inserting data error in server" });
            return res.json({ Status: "Success" });


        })


    })


})


app.post('/Login', (req, res) => {
    console.log("request received");
    //Sql query for extracting the data from user table.
    const sql = "SELECT * FROM user WHERE email= ? ";


    //IT helps to execute the sql query with the provided values.

    db.query(sql, [req.body.email], (err, data) => {
        //console.log(req.body.email);
        if (err) return res.json({ Error: "Login error in the server" });
        //If the email was existed then
        // If the email exists in the database
        if (data.length > 0) {
            bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
                if (err) return res.json({ Error: "Password hash error" });
                if (response) {
                    //Generating the token with the help of the name.
                    const name = data[0].name;

                    //Generating the token with the help of the role of the user.
                    const role = data[0].role;

                    //This is for the name.
                    const token = jwt.sign({ name }, "jwt-secret-key", { expiresIn: '1d' });

                    //This is one for the role.
                    // const token = jwt.sign({ role }, "jwt-secret-key", { expiresIn: '1d' });


                    //Generating the cookies.
                    res.cookie('token', token);

                    return res.json({ Status: "Success" });

                } else {
                    return res.json({ Error: "Password not matched " });

                }
            })

        } else {
            return res.json({ Error: "Email is not existed" });

        }


    })

})

//creating the function for verfiying the user.
const verifyuser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ Error: "You are not authenticated" });
    }
    else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) {
                return res.json({ Error: "Token is not corrected" });

            }else{
                req.name = decoded.name;
                next();
            }
        })


    }

}

app.get("/", verifyuser, (req, res) => {
    return res.json({Status: "Success", name: req.name});
   

})

// This is function for verfying the role.
const verifyrole = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ Error: "You are not authenticated" });
    }
    else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) {
                return res.json({ Error: "Token is not corrected" });

            }else{
                req.role = decoded.role;
                next();
            }
        })


    }

}


//Creating the practising the routes for authorization of the user.
app.get("/", verifyrole, (req, res) => {

    return res.json({Status: "Success", role: req.role});

})

//creating the practise API for logout.
app.get("/logout", (req,res) =>{
    res.clearCookie("token");
    return res.json({Status: "Success"});
})



app.get("/product", (req,res) =>{
    const cloth= "SELECT * FROM product"
    db.query(cloth,(err,data)=>{
        if (err) return res.json(err)
        return res.json(data)
    })
})


app.post("/product", (req,res)=>{
    const cloth="INSERT INTO product(`ProductName`, `ProductDescription`,`ProductPrice`,`ProductImage`) VALUES(?)"
    const values= [req.body.ProductName, req.body.ProductDescription, req.body.ProductPrice, req.body.ProductImage];

    db.query(cloth, [values], (err, data)=>{
        if (err) return res.json(err)
        return res.json("Product was added successfully.");

    })
})


app.delete("/product/:ProductID", (req,res)=>{
    const productId= req.params.ProductID;
    const cloth= "DELETE FROM product WHERE ProductID=?"

    db.query(cloth, [productId], (err, data)=>{
        if (err) return res.json(err);
        return res.json("Product was deleted successfully.");

    })

})




//Making the get method.
app.post("/home", (req, res) => {
    console.log("welcome to our place");
    res.send("Hello World");
})




app.listen(8081, () => {
    console.log(" Sever is Running");
})