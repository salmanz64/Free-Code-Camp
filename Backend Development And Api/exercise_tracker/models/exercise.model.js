const mongoose = require("mongoose")


const LogEntrySchema = mongoose.Schema({
    date:{
    type:String,
    required:true
},
duration:{
    type:Number,
    required:true
},
description:{
    type:String,
    required:true
},
},{
    _id:false
})


const ExerciseSchema = mongoose.Schema({
    _id :{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    count:{
        type:Number,
        required:true,
        
    },
   log:[LogEntrySchema]
},{
    versionKey:false
})

const Exercises = mongoose.model("Exercises",ExerciseSchema);
module.exports = Exercises;

