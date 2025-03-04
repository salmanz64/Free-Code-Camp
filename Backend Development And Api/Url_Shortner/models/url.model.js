const mongoose = require("mongoose")

const UrlSchema = mongoose.Schema({
    org_url:{
        type: String,
        required: true
    },
   
   
        short_url:{type:Number,required:true,default:0}
    
    
   })

const Url = mongoose.model("Url",UrlSchema)

module.exports = Url;