const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
    name:{type:String,required:true,unique:true}
},{
    versionKey:false
})

module.exports = mongoose.model("category",categorySchema)

