const express = require('express');
//to upload and save the images multer package is necessary
const multer = require('multer')
const { postFile } = require('../controllers/file.controller');
// the location of the place where it is stored
const upload = multer({dest:'uploads/'})

const fileRouter = express.Router();

// the upfile is the name given to the input in the html file
fileRouter.post('/',upload.single('upfile'), postFile)

module.exports = fileRouter;