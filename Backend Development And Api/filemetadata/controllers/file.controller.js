const multer = require('multer')

const postFile = (req,res)=>{
    res.json({
        // gets the details of the name of the file
        "name":req.file.originalname,
        // gets the type of the file 
        "type":req.file.mimetype,
        // get the size of the req file
        "size":req.file.size,})
}

module.exports = {
    postFile
}