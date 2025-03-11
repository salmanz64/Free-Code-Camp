const Exercises = require("../models/exercise.model");
const moment = require("moment");
const User = require("../models/users.model");



const createExercise= async(req,res)=>{

        try{
            const _id = req.params._id
            const {description,duration,date} = req.body;
            const parsedDate = date ? new Date(date) : new Date();
if (isNaN(parsedDate)) {
    return res.status(400).json({ error: "Invalid date format" });
}
const formattedDate = parsedDate.toDateString();

            
            const targetid =await  User.findById(_id);
            if(!targetid){
                return res.json({error:"User not found"})
            }
            const doesLogExists = await Exercises.findById(_id);
            const username = targetid.username;

            if(doesLogExists){
               const updatedexercise = await Exercises.findByIdAndUpdate(_id,
                    { $push: { log: {
                        date:formattedDate,
                        duration:parseInt(duration),
                        description:description
                    } },$inc:{
                        count:1
                    } }, // Add new log entry to the array
                    { new: true, runValidators: true } )



                    return res.status(200).json({
                        _id:_id,
                        username: username,
                        date:formattedDate,
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
                    date:formattedDate,
                    
                }
                
            })
            return res.status(200).json({
                _id:_id,
                username: username,
                date:formattedDate,
                duration:parseInt(duration),
                description:description
            })
                
            }

          
        }catch(e){
            res.status(500).json({error:e.toString()})
        }
}


const getExercises = async (req, res) => {
    try {
        const _id = req.params._id;
        const{from,to,limit} = req.query;
        const exerciseLog = await Exercises.findById(_id);
        
        

        if (!exerciseLog) {
            return res.status(404).json({ error: "No exercise logs found" });
        }

        // Convert date fields in logs to readable string format
        let formattedLogs = exerciseLog.log.map(log => ({
            description: log.description,
            duration: log.duration,
            date: new Date(log.date).toDateString()  // ✅ Ensuring date is a string
        }));
        

        if (from || to) {
            let fromDate = from ? new Date(from) : new Date(0); // Default: oldest date
            let toDate = to ? new Date(to) : new Date(); // Default: today's date
        
            formattedLogs = formattedLogs.filter((log) => {
                let logDate = new Date(log.date);
                return (logDate >= fromDate && logDate <= toDate);
            });
        }
        if(limit){
            formattedLogs = formattedLogs.slice(0,limit);
       }
      
        res.status(200).json({
            _id: exerciseLog._id,
            username: exerciseLog.username,
            count: exerciseLog.count,
            log: formattedLogs
        });

    } catch (e) {
        res.status(500).json({ error: "An error has occurred" });
    }
};



module.exports = {
    createExercise,
    getExercises
}