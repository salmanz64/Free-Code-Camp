const User = require("../models/users.model");


const createEmail = async(req,res)=>{
    try{
        let username = req.body["username"];
        const user = await User.create({
            username:username
        })
        res.status(200).json(user);
    }catch(e){
        res.status(500).json({
            error: e.toString()
        })
    }
}

module.exports ={
    createEmail
}