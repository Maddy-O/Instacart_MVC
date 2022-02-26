require("dotenv").config();
const User = require("../models/user.model") ;
const jwt = require('jsonwebtoken');

//step3: For Token
const newToken = (user) =>{
    return jwt.sign({user},process.env.SECRET_KEY );
}


const register = async (req,res)=>{
    try{
        //step1: For User Email 
        //*we will try to find the user with the email provided
        let user = await User.findOne({email:req.body.email}).lean().exec() ;
        
        //*if the user is found then it is an error
        if(user){
            return res.status(400).send({message:"please try another email"});
        }

        //*if user is not found then we will create the user with the email and the password provided
        user = await User.create(req.body) ;
        
        const token = newToken(user) ;

        return res.render("users/login.ejs", { user , token });
    }
    catch(er){
        res.status(500).send(er.message) ;
    }
}

const login = async (req,res)=>{
    try{
      // we will try to find the user with the email provided
      const user = await User.findOne({email:req.body.email});

     // If user is not found then return error
     if(!user){
         return res.status(400).send({message:"Please try another email or password"}) ;
     }
     
    // if user is found then we will match the passwords
    const match = user.checkPassword(req.body.password);

    if(!match){
        return res.status(400).send({message:"Please try another email or password"}) ;
    }
  
    // then we will create the token for that user
    const token = newToken(user) ;
    
    // then return the user and the token
     return res.render("users/productpage.ejs", { user , token });
    }
    catch(er){
        res.status(500).send(er.message) ;
    }
}

module.exports = {register , login} ;