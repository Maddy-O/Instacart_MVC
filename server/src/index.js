const express = require("express");
const app = express();
const port = 5000;
const connect = require("./config/db");

// importing all controllers.
const categoryController = require("./controllers/category.controller");
const subcategoryController = require("./controllers/subCategory.controller");

app.use(express.json());
app.use("/category",categoryController);
app.use("/subCategory",subcategoryController);


// Turning on the server and connection with db.
app.listen(port,async () =>{
    try{
        await connect();
        console.log(`listening on port ${port}`)
    }
    catch(err){
        console.log(err.message)
    }
})