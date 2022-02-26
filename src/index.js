require("dotenv").config() ;
const express = require("express") ;
const app = express() ;
app.use(express.json()) ;
app.use(express.urlencoded({ extended: true }));


const connect = require("./configs/db.js") ;
const {register , login} = require("./controllers/authentication.controller") ;
const usersController = require("./controllers/user.controller");
var path = require('path');


app.set('view engine', 'ejs');
app.set('view engine','html');
app.set('view engine','php');



app.use("/register" , register) ;
app.use("/login" , login) ;
app.use("/users", usersController)
app.set("view engine", "ejs");
app.use(express.static("public"));

port = 5500;
app.listen(port, async () => {
  await connect();
  console.log(`Listing on port ${port}`);
});
