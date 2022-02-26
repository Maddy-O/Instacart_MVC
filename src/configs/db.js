// import mongoose
const mongoose = require("mongoose");

// create connect function to connect to database
const connect = () => {
  return mongoose.connect("mongodb+srv://root:root@cluster0.8iob7.mongodb.net/instaCart");
};

//exporting the connect function in index.js
module.exports = connect;