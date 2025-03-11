const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    }
},
{
    versionKey:false
})

const User = mongoose.model("User",UserSchema)
module.exports = User;

