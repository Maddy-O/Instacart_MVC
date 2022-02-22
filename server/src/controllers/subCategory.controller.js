const express = require("express");
const SubCategory = require("../models/sub_category.model");
const { route } = require("./category.controller");
const router = express.Router();


router.post("",async (req,res)=>{
    try{
        const SubCategory = await SubCategory.create(req.body);    
        return res.status(201).send(branch);
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})

module.exports = router;
