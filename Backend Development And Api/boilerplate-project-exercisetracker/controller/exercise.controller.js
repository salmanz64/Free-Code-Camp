const Exercises = require("../models/exercise.model");
const moment = require("moment");
const User = require("../models/users.model");



const createExercise= async(req,res)=>{

        try{
            const _id = req.params._id
            const {description,duration,date} = req.body;
            
            const targetid =await  User.findById(_id);
            if(!targetid){
                return res.json({error:"User not found"})
            }
            const doesLogExists = await Exercises.findById(_id);
            const username = targetid.username;

            if(doesLogExists){
               const updatedexercise = await Exercises.findByIdAndUpdate(_id,
                    { $push: { log: {
                        date:new Date(date).toDateString(),
                        duration:parseInt(duration),
                        description:description
                    } },$inc:{
                        count:1
                    } }, // Add new log entry to the array
                    { new: true, runValidators: true } )



                    return res.status(200).json({
                        _id:_id,
                        username: username,
                        date:new Date(date).toDateString(),
                        duration:parseInt(duration),
                        description:description
                    })
            }else{
            
            
            
            const newexercise = await Exercises.create({
                _id:_id,
                username:username,
                count:1,
                log:{
                    description:description,
                    duration:parseInt(duration),
                    date:new Date(date).toDateString(),
                    
                }
                
            })
            return res.status(200).json({
                _id:_id,
                username: username,
                date:new Date(date).toDateString(),
                duration:parseInt(duration),
                description:description
            })
                
            }






            

          
        }catch(e){
            res.status(500).json({error:e.toString()})
        }
}


const getExercises= async(req,res)=>{

    try{

        const id =  req.params._id;
    const exercise = await Exercises.findById(id);
    res.status(200).json(exercise)
    }catch(e){
        res.status(500).json({error:"an error has occured"})
    }
    

}


module.exports = {
    createExercise,
    getExercises
}