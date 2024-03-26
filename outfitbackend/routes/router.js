// Importing the express framework for the Node.js
const express = require("express");

const router = new express.Router();

//Having the connection with the conn folder of the db.
const conn= require("../db/conn");

//Having the multer for uploading the images.
const multer= require("multer");

//Importing the moment for the showing the date and time.
const moment= require("moment");

//Image storage config
var imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null, './uploads')
    },
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}.${file.originalname}`)
    }

});

//Adding the image filter whether the user is sending the photo or not.
const isImage= (req,file,callback)=>{
    if(file.mimetype.startsWith('image')){
        callback(null,true)
    }else{
        callback(null,Error("only image is allowed"))

    }
}

var upload = multer({
    storage: imgconfig,
    fileFilter: isImage
})

//Adding the product.
router.post('/add',upload.single("photo"), (req,res)=>{
    const {name}= req.body;
    const {description}= req.body;
    const {price}= req.body;
    const {filename}= req.file;

    //Checking
    // console.log("data");

    //Giving the condition.
    if(!name || !filename){
        res.status(422).json({status:422, message:"fill all the details"})
    }

    try{
        let date=moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
        conn.query("INSERT INTO product SET ?", {ProductName:name, ProductDescription:description, ProductPrice:price, ProductImage:filename,Date: date}, (err,result)=>{
            if(err){
                console.log("error")
            }else{
            //  console.log("data added")  
              res.status(201).json({status:201, data:req.body})
            }
        })


    }catch(error){
        res.status(422).json({status:422, error})

    }


});

//Making the API for displaying the data from the database.
router.get("/getdata", (req,res)=>{
    try {
        conn.query("SELECT * FROM product", (err, result)=>{
            if(err){
                console.log("error")
            }else{
            //   console.log("data is get from databases.")  
              res.status(201).json({status:201, data:result})
            }

        })
        
    } catch (error) {
        res.status(422).json({status:422, error})
        
    }
})

//Deleting the product.
router.delete("/:ProductID", (req,res)=>{
    //Destructring.
    const {ProductID}= req.params;
    try {
        conn.query(`DELETE FROM product WHERE ProductID='${ProductID}' `, (err, result)=>{
            if(err){
                console.log("error")
            }else{
            //   console.log("data is delete from databases.")  
              res.status(201).json({status:201, data:result})
            }


        })
        
    } catch (error) {
        res.status(422).json({status:422, error})
        
    }


})


//Updating the products.
router.put("/update/:ProductID", upload.single("photo"), (req, res) => {
    const { ProductID } = req.params;
    const { name, description, price } = req.body;
    const { filename } = req.file;

    if (!name || !filename) {
        return res.status(422).json({ status: 422, message: "Fill all the details" });
    }

    try {
        let date = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
        conn.query(
            "UPDATE product SET ProductName=?, ProductDescription=?, ProductPrice=?, ProductImage=?, Date=? WHERE ProductID=?",
            [name, description, price, filename, date, ProductID],
            (err, result) => {
                if (err) {
                    console.log("error");
                    return res.status(500).json({ status: 500, error: "Internal Server Error" });
                } else {
                    console.log("Product updated successfully");
                    return res.status(200).json({ status: 200, message: "Product updated successfully" });
                }
            }
        );
    } catch (error) {
        return res.status(500).json({ status: 500, error: "Internal Server Error" });
    }
});








//Exporting the router.
module.exports= router;